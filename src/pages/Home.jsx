import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Insights from '../components/Insights'
import Testimonials from '../components/Testimonials'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Carousel />
      <Insights />
      <Testimonials />
    </div>
  )
}

export default Home