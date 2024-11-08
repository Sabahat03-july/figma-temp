import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import React from 'react'
import Work from '../Components/Work'
import Extension from '@/Components/Extension'
import Customise from '@/Components/Customise'
import Works from '@/Components/Works'
import Sponsors from '@/Components/Sponsors'
import Footer from '@/Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Work/>
      <Extension/>
      <Customise/>
      <Works/>
      <Sponsors/>
      <Footer/>
    </div>
  )
}

export default Home
