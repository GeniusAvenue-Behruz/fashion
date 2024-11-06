import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Listing from './pages/Listing.js'
import NoPage from './pages/NoPage.js'
import Blog from './pages/Blog.js'
import About from './pages/About.js'
import Bag from './pages/Bag.js'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/stories' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/bag' element={<Bag />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App