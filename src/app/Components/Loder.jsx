import React from 'react'
import loding from '../Images/loding.gif'
import Image from 'next/image'
import '../globals.css'

export default function Loder() {
  return (
    <div className='loding_page'>
      <Image alt="" src={loding}/>
    </div>
  )
}
