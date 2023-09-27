import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Promote from './Promote'
import Hero from './Hero'
import Cards from './Cards'
import Links from './Links'

export default function Container() {
  return (
    <div className='w-screen'>
        <Header />
        <Hero />
        <Links />
        <Cards />
        <Promote />
        <Footer />
    </div>
  )
}
