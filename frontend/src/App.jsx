import { Route, Routes } from 'react-router-dom'
import ServicesPage from './Pages/ServicesPage'
import AboutPage from './Pages/AboutPage'
import PartnersPage from './Pages/PartnersPage'
import BlogPage from './Pages/BlogPage'
import ApplyPage from './Pages/ApplyPage'
import HomePage from './Pages/HomePage'
import { useEffect } from 'react'

function App() {

useEffect(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/partners' element={<PartnersPage/>} />
        <Route path='/blogs' element={<BlogPage/>} />
        <Route path='/apply' element={<ApplyPage/>} />
      </Routes>
    </div>
  )
}

export default App
