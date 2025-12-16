import { Link } from 'react-router-dom'

const Right = ({ type }) => {
    return (
        <div className='w-full md:w-4/6 md:flex md:flex-col md:justify-center md:items-center'>
            <h2 className='text-white hidden text-6xl md:block'>
                {type === 'login' ? 'Welcome Back' : 'New Here'}
            </h2>
            <p className='text-gray-400 hidden md:block'>
                {type === 'login' ? 'Please enter your details to Login' : 'Please enter your details to Register'}
            </p>
            <form className='p-6 md:p-10 flex flex-col gap-1 md:w-1/2'>
                <h1 className='text-white text-4xl font-bold mb-2 md:hidden'>
                    {type === 'login' ? 'Login' : 'Registration'}
                </h1>

                {type === 'register' && (
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='firstname' className='text-white'>First Name:</label>
                        <input type="text" id="firstname" placeholder='Enter Your First Name' className='text-white px-4 py-2 rounded-xl border-2 border-gray-600' />
                    </div>
                )}

                {type === 'register' && (
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='lastname' className='text-white'>Last Name:</label>
                        <input type="text" id="lastname" placeholder='Enter Your Last Name' className='text-white px-4 py-2 rounded-xl border-2 border-gray-600' />
                    </div>
                )}

                <div className='flex flex-col gap-2 mt-3 w-full'>
                    <label htmlFor='email' className='text-white'>Email:</label>
                    <input type="email" id="email" placeholder='Enter Your Email' className='text-white px-4 py-2 rounded-xl border-2 border-gray-600' />
                </div>
                <div className='flex flex-col gap-2 mt-3 w-full'>
                    <label htmlFor='password' className='text-white'>Password:</label>
                    <input type="password" id="password" placeholder='Enter Your Password' className='text-white px-4 py-2 rounded-xl border-2 border-gray-600' />
                </div>
                <button className='bg-white text-black font-medium px-4 py-2 rounded-xl hover:bg-gray-100 mt-6'>
                    {type === 'login' ? 'Login' : 'Register'}
                </button>
                <p className='text-white mb-6 text-sm text-center'>
                    {type === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <Link to={type === 'login' ? '/Register' : '/Login'} className='text-blue-500 hover:text-blue-600'>
                        {type === 'login' ? 'Register' : 'Login'}
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Right