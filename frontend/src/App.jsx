import { Routes, Route } from "react-router-dom";
import PublicLayout from "./components/PublicLayout.jsx"; // Adjust path
import ScrollToTop from "./components/ScrollToTop.js";


import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import PartnersPage from "./Pages/PartnersPage";
import BlogPage from "./Pages/BlogPage";
import ApplyPage from "./Pages/ApplyPage";
import Layout from "./Pages/admin/Layout.jsx";
import Dashboard from "./Pages/admin/Dashboard.jsx";
import AddBlog from "./Pages/admin/AddBlog.jsx";
import ListBlog from "./Pages/admin/ListBlog.jsx";
import Login from "./components/admin/Login.jsx";
import 'quill/dist/quill.snow.css';
import SmoothScroll from "./components/SmoothScroll.jsx";
import { useEffect, useRef } from "react";


const App = () => {

  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  
  {/* Cursor Pointer Tracker */}
    const mouse = useRef({x: 0, y: 0})
    const position = useRef({x: 0, y: 0})

    useEffect(() => {
      const handleMouseMove = (e) => {
        mouse.current.x = e.clientX
        mouse.current.y = e.clientY
      }
      
      document.addEventListener('mousemove', handleMouseMove)

      const animate = () => {
        position.current.x += (mouse.current.x - position.current.x) * 0.1
        position.current.y += (mouse.current.y - position.current.y) * 0.1

        if(dotRef.current && outlineRef.current){
          dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
          outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
        }

        requestAnimationFrame(animate)
      }

      animate()

      return ()=>{
        document.removeEventListener('mousemove', handleMouseMove)
      }
    },[])

  return (
    <div> 
       <ScrollToTop />  
      <SmoothScroll /> {/* This enables the inertia scroll */}
      <Routes>
        {/* Public Routes with Navbar & Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={true ? <Layout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
        </Route>
      </Routes>

          {/* Cursor Ring */}
      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-blue-400 pointer-events-none z-[9999]" style={{transition:'transform 0.1s ease-out'}} ></div>
          {/* Cursor Dot */}
      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-blue-500 pointer-events-none z-[9999]" ></div>

    </div>
  );
}

export default App;
