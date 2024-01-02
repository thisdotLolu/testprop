import clsx from 'clsx'
import React from 'react'

interface Props {
    children:React.ReactNode,
    buttonClassName?:string,
    onClick?:()=>void
}


function Button({children, buttonClassName, onClick}:Props) {
  return (
    <button
    onClick={onClick}
    className={clsx('flex justify-center items-center border border-[rgba(52,51,62,1)] lg:px-[7.7px] h-[33px] lg:w-[113px] w-[80px] lg:text-[1rem] text-[.9rem] rounded-md py-[5px] bg-[rgba(52,51,62,1)] text-white', buttonClassName)}>
        {children}
    </button>
  )
}

export default Button