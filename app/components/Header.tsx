import React from 'react'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="flex flex-col justify-center">
        <h1 className="text-lg">Product Builder</h1>
        <Navbar />
    </header>
    
    
  )
}

export default Header