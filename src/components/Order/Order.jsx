import Modal from "../modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../../slices/modalSlice";
import { setOrder } from "../../slices/selectedOrderSlice";

const Order = (props) => {
   const { products } = useSelector((state) => state.products);
   const { isModalOpen } = useSelector((state) => state.modal)
   const dispatch = useDispatch();
   const handleClick = (e, orderId) => {
      if (e.target.tagName === "BUTTON") {
         dispatch(setIsModalOpen())
         dispatch(setOrder(orderId))
      } else {
         const selected = products.find(product => product.id === orderId);
         props.setSelectedOrder(selected);
         props.setIsDetailsOpen(true);
      }
   }
   return (
      <>
         {
            isModalOpen && <Modal header={"Вы уверены что хотите удалить этот приход?"} />
         }
         <li key={props.id} onClick={(e) => handleClick(e, props.id)} className='orders__list-item'>
            <span>{props.title}</span>
            <span>{props.date}</span>
            <span>{props.totalPriceUAH} UAH</span>
            <span>{props.totalPriceUSD} USD</span>
            <span>{props.totalProducts}products</span>
            <button className="orders__del-btn--order">X</button>

         </li>
      </>
   )

}
export default Order