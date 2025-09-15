import React from 'react'

const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-[#000099]/30 shadow-xl shadow-[#000099]/15 rounded-lg transition-all duration-500 ease-in-out opacity-0 animate-fade-in'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'>
              <span className='bg-[#000099]'>Admin</span>
              Login
              </h1>
            <p className='font-light'>Enter Your Credential to access admin panel</p>
          </div>
            <form onClick={handleSubmit}>
              <div className='flex flex-col'>
                <label>Email</label>
                <input type="email" required placeholder='Your Email' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login