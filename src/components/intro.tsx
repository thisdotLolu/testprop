import React from 'react'

function Intro() {
  return (
    <div className='bg-[rgba(249,249,249,1)] rounded-lg py-4 px-6 flex items-start w-full'>
        <div className='bg-[rgba(52,51,62,1)] rounded-md py-[3px] px-[3px] justify-center flex items-center h-[30px] w-[30px]'>
                <img
                src='/Logomark.png'
                alt='logo'
                className='w-[20px] h-[20px] object-contain'
                />
        </div>
        <div className='flex flex-col ml-8 justify-start items-start mt-[-5px] text-[rgba(52,51,62,1)]'>
        <p className='lg:text-[1.5rem] text-[1.1rem] font-semibold text-[rgba(88,88,88,1)]'>What do you want to generate?</p>
        <p>You can provide a description</p>
        </div>
        
    </div>
  )
}

export default Intro