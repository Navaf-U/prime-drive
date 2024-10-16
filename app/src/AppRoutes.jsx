import { Routes, Route, Outlet } from "react-router-dom";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
import UsedCars from "./pages/UsedCars";
function AppRoutes() {
  return (
    <div>
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Navbar /> <Outlet />
            </>
          }
        >
          <Route
           path="/" element={<Shop />} />
          <Route path="/usedcars" element={<UsedCars/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
