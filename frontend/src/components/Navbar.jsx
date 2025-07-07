import { useNavigate } from "react-router-dom"


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div>
      <nav className="bg-white fixed w-full shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 onClick={()=>navigate('/')} className="cursor-pointer"><span className="text-blue-800">AMC</span> <span className="text-red-800">& Associates</span></h1>
        {/* <img onClick={()=>navigate('/')} src="" alt="" />  */}
        <ul className="flex space-x-6">
          {["Home","About","Services","Features","Meet Our Partners","Contact Us"].map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-600">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
      
    </div>
  )
}

export default Navbar
