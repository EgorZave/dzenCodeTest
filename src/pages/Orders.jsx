import { useSelector } from 'react-redux'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'
import './orders.scss'
import { useState } from 'react'
import Order from '../components/Order/Order'
import Product from '../components/Product/Product'
import transition from '../transition';


function Orders() {
   const { orders } = useSelector((state) => state.orders)
   const [selectedOrder, setSelectedOrder] = useState(null);
   const [isDetailsOpen, setIsDetailsOpen] = useState(false);

   return (
      <>
         <NavigationMenu />
         <section
            className='orders'>
            {orders.length === 0 ? <div>Orders list is empty!</div> : <ul className='orders__list'>
               {orders.map((order) => {
                  return (
                     <Order key={order.id} {...order} setSelectedOrder={setSelectedOrder} setIsDetailsOpen={setIsDetailsOpen} />
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