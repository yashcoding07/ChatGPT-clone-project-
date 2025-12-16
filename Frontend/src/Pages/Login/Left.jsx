import React from 'react'

const Left = ({ type }) => {
    return (
        <div className='w-full rounded-b-4xl overflow-hidden md:w-3/6'>
            <img className={`w-full mask-b-from-0.5 ${type === 'register' ? 'h-24' : 'h-48'} border-b-2 object-cover md:border-r-2 md:rounded-r-4xl md:h-full md:w-full`} src="https://images.unsplash.com/photo-1737894543924-15e1ff7adbdb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bgimage" />
        </div>
    )
}

export default Left