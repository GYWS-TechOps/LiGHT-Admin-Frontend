import React from 'react'
import Hero from '../components/Home/Hero'
import Mission from '../components/Home/Mission'
import Reach from '../components/Home/Reach'
import Events from '../components/Home/Events' 
import Media from '../components/Home/Media'
import ToTopButton from '../components/ToTopButton'


const Home = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Reach />
      <Events/>
      <Media/>
      <ToTopButton />
    </div>
  )
}

export default Home