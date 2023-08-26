import { useDispatch, useSelector } from 'react-redux';
import './modal.scss';
import { setIsModalOpen } from '../../slices/modalSlice';
import { deleteOrder } from "../../slices/ordersSlice";
export default function Modal({ header }) {
   const dispatch = useDispatch();
   const { selectedOrder } = useSelector((state) => state.selectedOrder)
   function handleClick(e) {
      if (e.target.tagName === "DIV" || e.target.classList.contains('modal-cancel-btn') || e.target.classList.contains('modal-close-btn')) {
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
               <span className="modal-close-btn">✖</span>
            </h1>
            <div className="btn-wrap">
               <span className='modal-cancel-btn'>Отменить</span>
               <span className='delete-btn'>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height=".9em"
                     viewBox="0 0 448 512"
                     fill='#ff0000'
                  >
                     <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                  Удалить
               </span>
            </div>
         </div>
      </div>
   );
}
