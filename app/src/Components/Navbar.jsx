function Navbar() {
    return (
      <div>
        <div className="flex flex-col md:flex-row justify-around border-b-[1px] h-auto items-center border-red-500 p-4">
          <div className="text-xl font-bold text-[#8C3061]">Logo + PrimeDrive</div>
          <div className="flex gap-5">
            <h1 className="cursor-pointer text-[#8C3061] hover:text-blue-500">NEW CARS</h1>
            <h1 className="cursor-pointer text-[#8C3061] hover:text-blue-500">USED CARS</h1>
            <h1 className="cursor-pointer text-[#8C3061] hover:text-blue-500">REVIEWS & NEWS</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="p-2 border w-[150%] border-gray-300 rounded-md outline-[#8C3061]"
            />
          </div>
          <div className="flex space-x-4">
            <p className="text-[#8C3061]">Location</p>
            <p className="text-[#8C3061] cursor-pointer hover:text-blue-500">Login</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  