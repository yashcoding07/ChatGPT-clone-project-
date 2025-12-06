import "../styles/register.css";
import ThemeToggle from "../Components/Themetoggle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [form, setform] = useState({email: "", firstname: "", lastname: "", password: ""});
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e){
      e.preventDefault();
      axios.post("http://localhost:3000/api/auth/register", {
        email: form.email,
        fullName: {
          firstName: form.firstname,
          lastName: form.lastname,
        },
        password: form.password
      },{
        withCredentials: true
      }).then((res)=>{
        console.log(res)
        navigate("/");
      }).catch((err)=>{
        console.error(err);
      })
  }

  return (
    <>
      <ThemeToggle />
      <div className="auth-container">
        <div className="register-title">
          <h1>Create Account</h1>
          <span>Join and explore AI-powered conversations</span>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="first Name"
            className="input-field"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="input-field"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            onChange={handleChange}
          />

          <button className="btn">Register</button>
        </form>

        <p className="auth-footer">
          Already registered? <Link to={"/login"}>Login here</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
