
import './App.css';
import { useEffect } from "react";
import { getOrders } from "./slices/ordersSlice";
import { getProducts } from "./slices/productsSlice";
import { useDispatch } from "react-redux";
import AppRoutes from './AppRoutes/AppRoutes';

export default function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getOrders())
      dispatch(getProducts())

   }, [dispatch])
   return (
      <>
         <AppRoutes />
      </>
   )
}



