import Left from './Left'
import Right from './Right'

const Login = () => {
    return (
        <div className='h-screen w-full bg-black md:flex'>
            <Left type='login' />
            <Right type='login' />
        </div>
    )
}

export default Login