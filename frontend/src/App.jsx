import { Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout.jsx'; // Adjust path
import ScrollToTop from "./components/ScrollToTop.js";


// Import your pages (using your actual page names)
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
import Login from './components/admin/Login.jsx';

function App() {

  return (
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

      {/* Admin Routes WITHOUT Navbar & Footer */}
      <Route path="/admin" element={false ? <Layout/> : <Login/>}>
        <Route index element={<Dashboard />} />
        <Route path="addBlog" element={<AddBlog />} />
        <Route path="listBlog" element={<ListBlog />} />
      </Route>
    </Routes>
    
  );
}

export default App;
