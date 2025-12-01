const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const aiService = require("../services/Ai.service");
const messageModel = require("../models/message.model");
const {createMemory, queryMemory} = require("../services/vector.service");


function initSocketServer(httpServer){
    const io = new Server(httpServer, {})

    io.use(async (socket, next) => {
        const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

        if(!cookies.token){
            return next(new Error("Authentication error: No Token provided."));
        }

        try {
            const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);
            const user = await userModel.findById(decoded.id);
            if (!user) {
                return next(new Error("Authentication error: User not found."));
            }
            socket.user = user;
            next();
        } catch (error) {
            next(new Error("Authentication error: invalid token."));
        };
    });

    io.on("connection", (socket) => {
        socket.on("ai-message", async (messagePayload)=>{
            
            // await messageModel.create({
            //     chat: messagePayload.chat,
            //     user: socket.user._id,
            //     content: messagePayload.content,
            //     role: "user"
            // });

            const vectors = aiService.GenerateVector(messagePayload.chat)
            console.log("vectors generated: ", vectors)

            const chatHistory = (await messageModel.find({
                chat: messagePayload.chat
            }).sort({createdAt: -1}).limit(4).lean()).reverse()

            const response = await aiService.GenerateResponse(chatHistory.map(item => {
                return {
                    role: item.role,
                    parts: [{ text: item.content }]
                };
            }));

            // await messageModel.create({
            //     chat: messagePayload.chat,
            //     user: socket.user._id,
            //     content: response,
            //     role: "model"
            // });

            socket.emit("ai-response", {
                chat: messagePayload.chat,
                content: response
            });
        });
    });
};

module.exports = initSocketServer;