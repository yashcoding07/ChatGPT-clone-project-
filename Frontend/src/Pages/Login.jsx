import { useState } from "react";
import "../styles/login.css";
import ThemeToggle from "../Components/Themetoggle";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [form, setform] = useState({email: "", password: ""});
  const navigate = useNavigate();
    
  function handleChange(e){
    const {name, value} = e.target;
    setform(prev => ({...prev, [name]: value}));
  } 

  async function handleSubmit(e){
    e.preventDefault();
    axios.post("http://localhost:3000/api/auth/login", {
      email: form.email,
      password: form.password
    }, {
      withCredentials: true    
    }
  ).then((res)=>{
    console.log(res)
    navigate("/");
  }).catch((err)=>{
    console.error(err);
  })
  };

  return (
    <>
      <ThemeToggle />
      <div className="auth-container">
        <div className="login-title">
          <h1>Welcome Back</h1>
          <span>Login to continue your AI chats</span>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <input type="email" placeholder="Email" className="input-field" name="email" onChange={handleChange}/>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            onChange={handleChange}
          />

          <button className="btn">Login</button>
        </form>

        <p className="auth-footer">
          New here? <Link to={"/register"}>Create an account</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
