import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Promote from './Promote'
import Hero from './Hero'

export default function Container() {
  return (
    <div className='w-screen'>
        <Header />
        <Hero />
        <Promote />
        <Footer />
    </div>
  )
}
