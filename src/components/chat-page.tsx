'use client'
import React, { useState } from 'react'
import Intro from './intro'
import Input from './input'

const initialChats = [
    {
      user: 'J',
      message: 'Pictures of Dogs laughing, with a short back story',
    },
  ];
  
  

function ChatPage() {
    const [chats, setChats] = useState(initialChats);

    const sendMessage = (text:string, user = 'J') => {
      const newChat = { user, message: text };
      setChats([...chats, newChat]);
    };
  return (
    <div className='hidden w-[50%] p-4 border-l-[1px] chatpage pl-10 2xl:pt-8 pt-0 lg:flex flex-col justify-between items-center'>
        <Intro/>
        <div className='flex-1 my-5 w-full pl-4'>
        {
            chats.map((chat)=>(
                <div className='flex w-full items-start justify-start my-3'>
                    <p className='rounded-md bg-[rgba(243,255,235,1)] text-[rgba(42,136,19,1)] p-1 px-3 mr-2'>{chat.user}</p>
                    <p className='text-[rgba(88,88,88,1)]'>{chat.message}</p>
                </div>
            ))
        }
        </div>
        
        <Input
        sendFn={sendMessage}
        />
    </div>
  )
}

export default ChatPage