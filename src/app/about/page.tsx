import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <>
      <div className='text-3xl font-bold underline bg-yellow-300'>About</div>
      <div className=	"container display: flex justify-center gap-20 flex-wrap items-center">
        <div className='bg-red-400 w-1/4 h-200 text-center'>first Div</div>
        <div className='bg-green-400 w-1/4 h-1/5 text-center'>second Div</div>
        <div className='bg-blue-400 w-1/4 h-100 text-center'>third Div</div>
      </div>
      <Link href="/">go home</Link>
    </>

  )
}
