'use client'
import React, { useState } from 'react'
import Plus from './svgs/plus'
import Send from './svgs/send'

interface Props {
    sendFn:(text:string)=>void
}

function Input({sendFn}:Props) {
    const [message, setMessage] = useState('') 
  return (
    <div className='border border-[rgba(208,213,221,1)] rounded-lg flex p-2 items-center justify-between w-full'>
        <Plus/>
        <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        type='text'
        className='outline-none border-none flex-1 mx-2'
        />
        <div
        onClick={()=>{
            sendFn(message),
            setMessage('')
        }}
        >
        <Send
        />
        </div>
        
    </div>
  )
}

export default Input