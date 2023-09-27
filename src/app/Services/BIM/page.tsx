import { BgImage } from '@/app/components/bgImage'
import React from 'react'
import Image from "next/image"


export default function BIM (){
    return(
        <div>
            <BgImage imageData={'/images/image22.png'} BadgeData={'Our BIM'} />
            <div className=''>
            <div className='flex flex-row gap-4 pl-24 py-24'>
            <Image src="/images/house3.jpg" alt="image" width={400} height={400} className=''/>
            <p> Building Information Modeling</p>
            </div>
            <div className='pr-48 pl-48 justify-center'>
                <h1 className='text-3xl font-bold'></h1>
                <p className='text-xl '></p>
            </div>
        </div>
        </div>
    )
}