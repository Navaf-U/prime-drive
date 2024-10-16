import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import CarLogo from '../assets/LogoCar.png'
function Navbar() {
    return (
      <div className=" position fixed bg-white w-full z-50">
        <div className="flex flex-col md:flex-row justify-around border-b-[1px] h-auto items-center border-[gray] p-4">
          <div className="text-xl flex font-bold text-[#522258] justify-center items-center me-20"><img src={CarLogo} className="w-16 rounded-xl me-2" alt="" />PrimeDrive</div>
          <div className="flex gap-5">
            <h1 className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">NEW CARS</h1>
            <h1 className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">USED CARS</h1>
            <h1 className="cursor-pointer text-[#8C3061] hover:text-[#da45ee]">REVIEWS & NEWS</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="p-2 border w-[150%] border-gray-300 rounded-md outline-[#8C3061]"
            />
          </div>
          <div className="flex space-x-4">
            <p className="text-[#8C3061] cursor-pointer hover:text-[#da45ee]"><CiLocationOn size={30}/></p>
            <p className="text-[#8C3061] cursor-pointer hover:text-[#da45ee]"><HiOutlineUserCircle size={30}/></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  