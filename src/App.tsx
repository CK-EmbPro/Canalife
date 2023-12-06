import React from 'react'
import Navbar from './components/Navbar'
import TopCategories from './components/TopCategories'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <TopCategories />
    </div>
  )
}

export default App