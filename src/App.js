import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Profile from "./pages/Hookah/HookahProfile/HookhProfile";
import MainHome from "./pages/MainHome/MainHome";
import Registration from "./pages/Registration/Registration";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HookahProducts from "./pages/Hookah/HookahProducts/HookahProducts";
import HookahSingleProduct from "./pages/Hookah/SingleProduct/HookahSingleProduct";
import TobaccoSingleProduct from "./pages/Hookah/SingleProduct/TobaccoSingleProduct";
import Policy from "./pages/Hookah/Policy/Policy";
import './App.css';

export default function App() {
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);

  return (
    <div className={`App ${isBurgerOpen? "burger_open" : ""}`}>
      <Routes>
        <Route path="/login" element={<Registration />} />
        <Route path="/" element={<PrivateRoute><MainHome /></PrivateRoute>} />
        <Route path="/:param" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/:param/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/:param/basket" element={<PrivateRoute><Basket /></PrivateRoute>} />
        <Route path="/:param/products" element={<PrivateRoute><HookahProducts /></PrivateRoute>} />
        <Route path="/:param/products/hookah/:id" element={<PrivateRoute><HookahSingleProduct /></PrivateRoute>}/>
        <Route path="/:param/products/tobacco/:id" element={<PrivateRoute><TobaccoSingleProduct /></PrivateRoute>}/>
        <Route path="/:param/policy" element={<PrivateRoute><Policy /></PrivateRoute>}/>
      </Routes>
    </div>
  );
}