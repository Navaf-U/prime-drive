import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import PremiumCard from "./shared/PremiumCard";
import { TiArrowRightOutline } from "react-icons/ti";
function Shop() {

  return (
    <div>
      <Hero />
      <h1 className="text-[30px] mt-5 font-bold text-center">New Collections</h1>
      <PremiumCard/>
      <h1 className="text-[40px] text-center font-[500]">Explore Pre-Owned Vehicles</h1>
      <div className="flex justify-center items-center">
        <NavLink to="/usedcars">
        <TiArrowRightOutline size={80}/>
        </NavLink>

      </div>
    </div>

  );
}

export default Shop;
