import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Button from './button'
import Save from './svgs/save'

function DetailHeader() {
  return (
    <>
    <div className='flex flex-col lg:w-[50%] w-full'>
      <div className='flex justify-between items-center 2xl:mb-[30px] mb-[10px] w-full'>
      <ChevronLeftIcon
        color='rgba(81,82,108,1)'
        height={40}
        width={40}
        />
        <div className='flex'>
            <Button
            buttonClassName='bg-white !text-[rgba(52,51,62,1)]'
            >
                <Save/>
                <p className='ml-[5px]'>Save</p>
            </Button>

            <Button
            buttonClassName='ml-[8px]'
            >
                <p className='block lg:hidden'>Submit</p>
                <p className='hidden lg:block'>Button</p>
            </Button>

        </div>
      
      </div>
      <hr
      className='hidden lg:block'
      />     
    </div>
    </>
  )
}

export default DetailHeader