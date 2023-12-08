import React from 'react'
import Footer from './components/Footer'
import GettingKnowUs from './components/GettingKnowUs'
import Navbar from './components/Navbar'
import Ordering from './components/Ordering'
import TopCategories from './components/TopCategories'
import TopPerks from './components/TopPerks'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <TopCategories />
      <GettingKnowUs/>
      <TopPerks/>
      <Ordering/>
      <Footer/>
    </div>
  )
}

export default App