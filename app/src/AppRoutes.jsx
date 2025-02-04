import Shop from "./pages/Shop";
import Navbar from "./Components/Navbar";
import UsedCars from "./pages/UsedCars";
import ProductsView from "./pages/ProductsView";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { Routes, Route, Outlet } from "react-router-dom";
import SearchedPage from "./pages/SearchedPage";
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/search" element={<SearchedPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
