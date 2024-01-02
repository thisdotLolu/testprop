import React from 'react'
import ItemDetails from './item-details'
import ChatPage from './chat-page';
import DetailHeader from './detail-header';

function HomeComponent() {
  return (
    <div className='2xl:mt-[100px] lg:mt-[80px] mt-[30px] h-[fit-content]'>
      <div className='max-w-[1350px] mx-auto flex justify-center items-center px-4 2xl:pt-[20px] pt-[10px] sm:px-6 4xl:px-16 h-[100%]'>
        <DetailHeader/>
        <div className='lg:block hidden w-[50%]'>
        </div>
        </div>
        
      <div className='max-w-[1350px] mx-auto flex justify-center items-start px-4 py-3.5 sm:px-6 lg:py-6 2xl:px-7 3xl:px-8 4xl:py-9 4xl:px-16 h-[100%]'> 
      <ItemDetails/>
      <ChatPage/>
      </div>
    </div>
  )
}

export default HomeComponent;