import { useSelector } from 'react-redux'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'
import './orders.scss'
import { useState } from 'react'
import Order from '../components/Order/Order'
import Product from '../components/Product/Product'
import transition from '../transition';
import Modal from "../components/modal/index";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../slices/modalSlice";
import { setOrder } from "../slices/selectedOrderSlice";


function Orders() {
   const { orders } = useSelector((state) => state.orders)
   const { products } = useSelector((state) => state.products);
   const [selectedOrder, setSelectedOrder] = useState(null);
   const [isDetailsOpen, setIsDetailsOpen] = useState(false);
   const { isModalOpen } = useSelector((state) => state.modal)
   const dispatch = useDispatch();
   const handleClick = (e, orderId) => {
      if (e.target.tagName === "BUTTON") {
         dispatch(setIsModalOpen())
         dispatch(setOrder(orderId))
         setIsDetailsOpen(false);
      } else {
         const selected = products.find(product => product.id === orderId);
         setSelectedOrder(selected);
         setIsDetailsOpen(true);
      }
   }
   return (
      <>
         {
            isModalOpen && <Modal header={"Вы уверены что хотите удалить этот приход?"} />
         }
         <NavigationMenu />
         <section
            className='orders'>
            {orders.length === 0 ? <div>Orders list is empty!</div> : <ul className='orders__list'>
               {orders.map((order) => {
                  return (
                     <Order handleClick={handleClick} key={order.id} {...order} setSelectedOrder={setSelectedOrder} setIsDetailsOpen={setIsDetailsOpen} />
                  )
               })}
            </ul>}

            {isDetailsOpen ? <table className="table table-hover orders__table">
               <thead>
                  <tr key={selectedOrder.id} >
                     <th key={`title-${selectedOrder.id}`} scope="col">Title</th>
                     <th key={`type-${selectedOrder.id}`} scope="col">Type</th>
                     <th key={`specification-${selectedOrder.id}`} scope="col">Specification</th>
                     <td className='table__close-btn'>
                        <button onClick={() => setIsDetailsOpen(!isDetailsOpen)} className='orders__del-btn'>X</button>
                     </td>
                  </tr>
               </thead>
               <tbody key={`t-body-${selectedOrder.id}`} >
                  <Product key={`product-${selectedOrder.id}`} {...selectedOrder} ordersTable />
               </tbody>
            </table> : null}

         </section >

      </>
   )
}
export default transition(Orders)