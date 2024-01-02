import React from 'react'
import Avatar from './svgs/avatar'

function Header() {
  return (
    <div className='hidden lg:block w-full 2xl:h-[100px] h-[80px] fixed top-0 left-0 z-[1000] bg-white'>
        <div className='max-w-[1350px] mx-auto flex justify-between items-center px-4 py-3.5 sm:px-6 lg:py-6 2xl:px-7 3xl:px-8 4xl:py-9 4xl:px-16 h-[100%]'>
                <div className='flex items-center justify-center'>
                <div className='bg-[rgba(52,51,62,1)] rounded-md py-[8px] px-[13px]'>
                <img
                src='/Logomark.png'
                alt='logo'
                />
                </div>
                
                <p className='ml-[5px] font-medium'>NAME</p>
                </div>

                <div className='flex justify-center items-center bg-[rgba(234,236,240,0.29)] py-[8px] px-[13px] rounded-md'>
                    <Avatar/>
                    <p>James Blunt</p>
                </div>
        </div>
    </div>
  )
}

export default Header