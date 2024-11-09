import CarLogo from "../assets/LogoCar.png";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
function Navbar() {
  const [menuBar,setMenBar]=useState(false)
  const cartProducts = useSelector(state=>state.cart)
  const toggleBar=()=>{
    setMenBar(!menuBar)
  }
  return (
    <div className=" position fixed top-0 bg-white w-full z-50">
      <div className="flex flex-row  justify-around border-b-[1px] h-auto items-center border-[gray] p-4">
        <NavLink to="/">
          
          <div className="text-xl  flex font-bold text-[#522258] justify-center items-center me-20">
            <img src={CarLogo} className="w-16 rounded-xl me-2" alt="" />
            PrimeDrive
          </div>
        </NavLink>
        <div className="hidden md:flex gap-5">
          <NavLink to="/">
            
            <h1 className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">
              NEW CARS
            </h1>
          </NavLink>
          <NavLink to="/usedcars">
            <h1 className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">
              USED CARS
            </h1>
          </NavLink>
          <h1 className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">
            REVIEWS & NEWS
          </h1>
        </div>
        <div className="hidden sm:flex w-[300px] me-5">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border w-[100%] border-gray-300 rounded-md outline-[#8C3061]"
          />
        </div>
        <div className="flex gap-5">
          <CiSearch size={30} className="text-[#8C3061 sm:hidden "/>
          <p className="text-[#8C3061] cursor-pointer hover:text-[#da45ee]">
            <CiLocationOn size={30} />
          </p>
          <NavLink to="/login">
          <p className="text-[#8C3061] cursor-pointer hover:text-[#da45ee]">
            <HiOutlineUserCircle size={30} />
          </p>
          </NavLink>

      { /* i need to add the isLogged condition */ }

          <NavLink to="/cart">
          <div className="text-[#8C3061] cursor-pointer hover:text-[#da45ee] position relative">
            <CiShoppingCart size={30} />
            <div className="h-4 w-4 rounded-full bg-[#8C3061] position absolute text-[14px] top-[-8px] right-0 text-white text-center"><h1 className="position absolute bottom-[-2px] right-1 font-[500]">{cartProducts.length}</h1></div>
          </div>
          </NavLink>
  
        </div>
      <CiMenuBurger className="cursor-pointer ms-5 md:hidden" onClick={toggleBar} />
      </div>


      <div className={`fixed top-0 right-0 bg-[gray] text-white w-36 h-screen transition-transform duration-300 ease-in-out ${
          menuBar ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}>
          <NavLink to="/">
            
            <h1 onClick={toggleBar} className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">
              NEW CARS
            </h1>
          </NavLink>
          <NavLink to="/usedcars">
            <h1 onClick={toggleBar} className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">
              USED CARS
            </h1>
          </NavLink>
          <h1  onClick={toggleBar} className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">
            REVIEWS & NEWS
          </h1>
        </div>
        
    </div>
  );
}

export default Navbar;
