import React from 'react'
import style from '../../Style/Category.module.css'
import '../../globals.css'
import Section1 from '@/app/Components/Category/Section1'
import Section2 from '@/app/Components/Home/Section2'

export default function page() {
  return (
    <div>
      <Section1/>
      <Section2/>
      <h1> This is Category Page</h1>
    </div>
  )
}
