import Hero from "../Components/Hero";
import PremiumCard from "../Components/shared/PremiumCard";
import { NavLink } from "react-router-dom";

function Shop() {
  return (
    <div className="px-4 md:px-10">
      <Hero />
      <h1 className="text-[24px] md:text-[30px] mt-5 font-bold text-center">
        New Collections
      </h1>
      <PremiumCard />
      <h1 className="text-[28px] md:text-[40px] text-center font-[500]">
        Explore Pre-Owned Vehicles
      </h1>
      <div className="flex justify-center items-center">
        <NavLink to="/usedcars">
          <div className="arrow"></div>
        </NavLink>
      </div>
    </div>
  );
}

export default Shop;
