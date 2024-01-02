import React from 'react'
import DetailHeader from './detail-header'
import DetailComponent from './detail-conponent'

function ItemDetails() {
  return (
    <div className='flex flex-col lg:w-[50%] w-full 2xl:p-4 2xl:pr-10 lg:pr-10 pr-0'>
        <DetailComponent/>
    </div>
  )
}

export default ItemDetails