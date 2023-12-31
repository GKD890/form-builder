import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link 
      href={'/'}
      className='font-bold text-3xl bg-gradient-to-r from-indigo-600 to-cyan-500  text-transparent bg-clip-text hover:cursor-pointer'
    >
      Form Builder
    </Link>
  )
}

export default Logo