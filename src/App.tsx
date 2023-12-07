import React from 'react'
import GettingKnowUs from './components/GettingKnowUs'
import Navbar from './components/Navbar'
import TopCategories from './components/TopCategories'
import TopPerks from './components/TopPerks'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <TopCategories />
      <GettingKnowUs/>
      <TopPerks/>
    </div>
  )
}

export default App