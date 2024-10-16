import { Routes, Route, Outlet } from "react-router-dom";
import Shop from "./Components/Shop";
import Navbar from "./Components/Navbar";
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
          <Route path="/" element={<Shop />} />
          </Route>

      </Routes>
    </div>
  );
}

export default AppRoutes;
