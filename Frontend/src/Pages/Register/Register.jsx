import Left from "../Login/Left"
import Right from "../Login/Right"

const Register = () => {
  return (
    <div className="h-screen w-full bg-black md:flex">
      <Left type="register" />
      <Right type="register" />
    </div>
  )
}

export default Register