const { Server, Socket } = require("socket.io");

function initSocketServer(httpServer){
    const io = new Server(httpServer, {})

    io.on("connection", (Socket) => {
        console.log("New socket connection", Socket.id)
    });
};

module.exports = initSocketServer;