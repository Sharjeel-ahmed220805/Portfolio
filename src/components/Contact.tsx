import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div data-aos="zoom-in-left" id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'>Get in touch</h2>
            <p className='text-gray-200 text-[18px] pt-2 '>
            Your thoughts are important to us—please don’t hesitate to reach out!
            </p>
            <div className='flex gap-3 items-center'>
            <AiOutlineMail size={30} /> xyz@gmail.com
            </div>
            <div className='flex gap-3 items-center'>
            <BsTelephone size={30}/> 0331-6072026
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='h-[40px] bg-transparent border border-blue-600' id='name'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email</label>
                <input type='text' className='h-[40px] bg-transparent border border-blue-600' id='email'/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='msg'>Message</label>
                <textarea className=' bg-transparent border border-blue-600' id='msg' rows={8}></textarea>
            </div>
            <button className='bg-blue-600 p-2 px-6 hover:bg-blue-300'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
