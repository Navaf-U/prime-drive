function Hero() {
  return (
    <div className="bg-[url(D:\project\PrimeDrive\app\src\assets\heroBg.jpg)]  object-cover w-full h-screen bg-cover bg-center flex flex-col justify-end items-center pb-20 px-4">
      <h1 className="text-3xl sm:text-4xl text-white font-bold text-center">Locate Your Dream Car</h1>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-5 items-center w-full max-w-[800px]">
        <input
          type="text"
          placeholder="Type to select car name"
          className="ps-2 h-12 sm:h-14 w-full sm:w-[600px] rounded-md sm:rounded-l-md outline-none"
        />
        <button className="bg-[#C63C51] w-full sm:w-[150px] h-12 sm:h-14 rounded-md sm:rounded-r-md text-white font-semibold">
          Search
        </button>
      </div>
    </div>
  );
}

export default Hero;
