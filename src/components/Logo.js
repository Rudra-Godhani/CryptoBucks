import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'

function Logo() {
  return (
    <Link to='/' className='absolute sm:top-[1.5rem] top-[1rem] sm:left-[1.5rem] left-[1rem] [text-decoration:none] text-lg text-cyan flex items-center sm:text-lg text-md'>
        <img src={logoSvg} alt="CryptoBucks" />
        <span>CryptoBucks</span>
    </Link>
  )
}

export default Logo