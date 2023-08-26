import { useDispatch, useSelector } from 'react-redux';
import './modal.scss';
import { setIsModalOpen } from '../../slices/modalSlice';
import { deleteOrder } from "../../slices/ordersSlice";
export default function Modal({ header }) {
   const dispatch = useDispatch();
   const { selectedOrder } = useSelector((state) => state.selectedOrder)
   function handleClick(e) {
      if (e.target.tagName === "DIV" || e.target.classList.contains('cancel-btn') || e.target.classList.contains('close-btn')) {
         dispatch(setIsModalOpen());
      } else {
         dispatch(deleteOrder(selectedOrder));
         dispatch(setIsModalOpen());
      }
   }

   return (
      <div onClick={(e) => handleClick(e)} className="back">
         <div className='modalBuy'>
            <h1 className="modalHeader">
               {header}
               <button className="close-btn">✖</button>
            </h1>
            <div className="btn-wrap">
               <button className='cancel-btn'>Отменить</button>
               <button className='delete-btn'>Удалить</button>
            </div>
         </div>
      </div>
   );
}
