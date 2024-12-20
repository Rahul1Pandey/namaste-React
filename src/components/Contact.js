import React from 'react'

const Contact = () => {
  return (
    <div className='p-4 m-4  '>
      <div className='text-2xl m-5'><h1>Contact us</h1></div>
      <form>
        <input className='text-xl m-3 p-1' type='text' placeholder='Name'></input>
        <input className='text-xl m-3 p-1' type='text' placeholder='message'></input>
        <button className='bg-gray-300 rounded-lg m-2 p-1'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
