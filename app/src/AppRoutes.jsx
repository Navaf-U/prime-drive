import { Routes, Route, Outlet } from "react-router-dom";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
import UsedCars from "./pages/UsedCars";
import ProductsView from "./pages/ProductsView";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
          <Route path="/product/:id" element={<ProductsView/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
