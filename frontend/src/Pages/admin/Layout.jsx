import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Sidebar from "../../components/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";


const Layout = () => {
  const navigate = useNavigate();
  const { axios, setToken } = useAppContext();

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Reset context token state
    setToken(null);

    // Remove axios Authorization header
    delete axios.defaults.headers.common["Authorization"];

    // Redirect to home/login
    navigate("/admin");
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.amclogo}
          alt="amc_logo"
          className="w-20 sm:w-30 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* ✅ Fixed Logout Button */}
        <button
          className="text-sm px-8 py-2 bg-[#000088] text-white rounded-full cursor-pointer"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;