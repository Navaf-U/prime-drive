function Hero() {
  return (
    <div>
        <div className="bg-[url(D:\project\PrimeDrive\app\src\assets\heroBg.jpg)] bg-cover h-screen w-full bg-center flex flex-col justify-end items-center pb-20">
        <h1 className="text-4xl text-white font-bold">Locate Your Dream Car</h1>
        <div className="flex mb-[-10] mt-5 items-center">
        <input type="text" placeholder="type to select car name" className="ps-2 h-14 rounded-tl-md rounded-bl-md  w-[750px] outline-none"  />
        <button className="bg-[#C63C51] w-[150px] h-14 ms-[-6px] rounded-lg border-4 border-white">Search</button>
        </div>
        </div>      
    </div>
  )
}

export default Hero
