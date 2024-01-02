'use client'
import React, { useEffect, useState } from 'react'
import GreenCheck from './svgs/greencheck'
import Button from './button'
import { useRouter } from 'next/navigation'

const detailInfo = {
    title:'Happy Dogs',
    location:'Madrid Spain',
    images:['/dog.png','/dog.png','/dog.png','/dog.png','/dog.png','/dog.png','/dog.png',],
    description: "The notion of dogs laughing is often associated with the infectious joy and playfulness they bring into our lives. While dogs don't express laughter in the same way humans do, their happiness manifests through various behaviors like wagging tails, barks, and exuberant play.",
    dateTaken: '1 year ago (12 April 2023 - 11 April 2024)',
    price: '1100',
    numberOne:'1',
    numberTwo:'2'
}


function DetailComponent() {
    const [locations,setLocations] = useState<string[]>([])

    useEffect(()=>{
        function repeatStringInArray(str:string, n:number) {
            const repeatedStrings = [];
            for (let i = 0; i < n; i++) {
              repeatedStrings.push(str);
            }
            repeatedStrings && setLocations(repeatedStrings)
            return repeatedStrings;
          }

          repeatStringInArray('Spain',12)
    },[])
    
    const router = useRouter()
    
    
  return (
    <div className='w-full 2xl:pt-4'>
        <p className='font-bold lg:text-[1.8rem] text-[1.4rem] text-[rgba(52,51,62,1)]'>{detailInfo.title}</p>
        <p className='text-[1rem] text-[rgba(52,51,62,1)] my-2'>{detailInfo.location}</p>
        <div className='lg:hidden w-full rounded-lg py-3 px-4 bg-[rgba(250,250,251,1)] mt-10 flex justify-evenly items-center'>
            <div className='flex flex-col'>
                <p className='text-[rgba(88,88,88,1)]'>Price</p>
                <p className='text-[rgba(52,51,62,1)] font-semibold text-[1.1rem]'>&euro;{detailInfo.price}</p>
            </div>
            <div className='h-[30px] w-[3px] bg-[rgba(232,232,232,1)]'> &nbsp;</div>
            <div className='flex flex-col'>
               <p className='text-[rgba(88,88,88,1)]'>Number</p>
               <p className='text-[rgba(52,51,62,1)] font-semibold text-[1.1rem]'>{detailInfo.numberOne}</p>
            </div>
            <div className='h-[30px] w-[3px] bg-[rgba(232,232,232,1)]'> &nbsp;</div>
            <div className='flex flex-col'>
                <p className='text-[rgba(88,88,88,1)]'>Number</p>
                <p className='text-[rgba(52,51,62,1)] font-semibold text-[1.1rem]'>{detailInfo.numberTwo}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between mt-6'>
            {
                detailInfo.images.slice(0,2).map((image,index)=>{
                    return (
                        <img
                        src={image}
                        alt='dog'
                        className='mr-4 lg:h-[180px] lg:w-[180px] w-[150px] h-[150px] object-contain'
                        />
                        
                    )
                })
            }
            <div className='h-[180px] w-[180px] bg-[rgba(250,250,251,1)] text-[rgba(88,88,88,1)] rounded-3xl flex items-center justify-center'>
               + {detailInfo.images.length-2} more
            </div>
        </div>
        <div className='lg:hidden overflow-x-scroll flex items-center w-full justify-between mt-6'>
            {
                detailInfo.images.map((image,index)=>{
                    return (
                        <img
                        src={image}
                        alt='dog'
                        className='mr-4 lg:h-[180px] lg:w-[180px] w-[150px] h-[150px] object-contain'
                        />
                        
                    )
                })
            }
        </div>
        
        <div className='flex flex-col items-start justify-center mt-6'>
            <p className='text-[rgba(52,51,62,1)] text-[1.2rem] mb-1 font-semibold'>Description</p>
            <p className='text-[rgba(88,88,88,1)]'>{detailInfo.description}</p>
        </div>

        <div className='flex flex-col items-start justify-center mt-6'>
            <p className='text-[rgba(52,51,62,1)] text-[1rem] mb-1 font-semibold'>Date Taken</p>
            <p className='text-[rgba(88,88,88,1)]'>{detailInfo.dateTaken}</p>
        </div>

        <div className='hidden w-full rounded-lg py-6 px-8 bg-[rgba(250,250,251,1)] mt-10 lg:flex'>
            <div className='flex flex-col'>
                <p className='text-[rgba(88,88,88,1)]'>Price</p>
                <p className='text-[rgba(52,51,62,1)] font-semibold text-[1.4rem]'>&euro;{detailInfo.price}</p>
            </div>

            <div className='flex flex-col mx-20'>
               <p className='text-[rgba(88,88,88,1)]'>Number</p>
               <p className='text-[rgba(52,51,62,1)] font-semibold text-[1.4rem]'>{detailInfo.numberOne}</p>
            </div>

            <div className='flex flex-col'>
                <p className='text-[rgba(88,88,88,1)]'>Number</p>
                <p className='text-[rgba(52,51,62,1)] font-semibold text-[1.4rem]'>{detailInfo.numberTwo}</p>
            </div>
        </div>

        <div className='flex flex-col mt-6'>
            <p className='text-[rgba(52,51,62,1)] text-[1.2rem] mb-4 font-semibold'>Locations</p>
            <div className='w-full flex flex-wrap justify-between'>
                {
                    locations.map((location)=>(
                        <div className='flex mr-12 my-2'>
                            <GreenCheck/><span className='ml-3'>{location}</span>
                        </div>
                    ))
                }        
        </div>
        </div>
        

        <div className='w-full flex flex-col justify-center items-center lg:hidden '>
            <Button
            onClick={()=>router.push('/chat')}
            buttonClassName='!w-full !py-8 !text-[1.2rem] !mt-8'
            >
                Submit
            </Button>

            <p className='underline mt-6 text-black font-semibold'>Save & Publish Later</p>
        </div>
    </div>
  )
}

export default DetailComponent