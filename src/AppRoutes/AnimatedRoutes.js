import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products"
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
   const location = useLocation();
   return (
      <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname} >
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
         </Routes >
      </AnimatePresence>
   )

}
export default AnimatedRoutes
