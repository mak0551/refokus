import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='footer max-w-screen-xl mx-auto py-10 px-6 flex gap-32'>
            <div className='footer1 basis-1/2'>
                <h1 className='h1 text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='footer2 basis-1/2 flex gap-4'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                    {["instagram","twitter (x?)", "LinkedIn"].map((item, index)=> <a className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                    {["instagram","twitter (x?)", "LinkedIn"].map((item, index)=> <a className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/2'>
                    <p className=' text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, modi.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
