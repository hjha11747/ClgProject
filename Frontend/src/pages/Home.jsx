import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offer from '../components/Offer'
import NewsLetter from '../components/NewsLetter'
import NewCollection from '../components/NewCollection'

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer/>
      <NewCollection />
      <NewsLetter />
    </>
  )
}

export default Home