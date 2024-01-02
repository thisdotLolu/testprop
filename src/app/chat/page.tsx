'use client'
import React, { useState } from 'react'
import Intro from '@/components/intro';
import Input from '@/components/input';
import { ChevronLeftIcon, EyeIcon } from '@heroicons/react/16/solid';
import Button from '@/components/button';
import Eye from '@/components/svgs/eye';
import { useRouter } from 'next/navigation';

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

    const router = useRouter()
  return (
    <>
     <div className='lg:hidden w-full chatpage flex flex-col justify-between items-center p-2 max-h-screen'>
     <div className='flex flex-col lg:w-[50%] w-full p-2'>
      <div className='flex justify-between items-center 2xl:mb-[30px] mb-[10px] w-full'>
      <ChevronLeftIcon
        onClick={()=>router.back()}
        color='rgba(81,82,108,1)'
        height={40}
        width={40}
        />
        <div className='flex'>
            <Button
            buttonClassName='bg-[rgba(52,51,62,1)] !text-[#fff] !w-[100px] !py-4'
            >
                <Eye/>
                <p className='ml-[5px]'>Preview</p>
            </Button>
        </div>
      
      </div>
      <hr
      className='hidden lg:block'
      />     
    </div>
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
        <div className='w-full px-2'>
        <Input
        sendFn={sendMessage}
        />
        </div>
    </div>
    </>
  )
}

export default ChatPage