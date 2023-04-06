import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='bf-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl text-white  mx-auto flex justify-between flex-col sm:flex-row'>
        <FaBars className='' />
        <Link href={'/'} className='font-normal text-white/80 hover:text-white no-underline'>Link to Home</Link>
      </div>
    </nav>
  )
}
