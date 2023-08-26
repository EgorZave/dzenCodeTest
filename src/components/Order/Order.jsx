
const Order = (props) => {
   return (
      <>
         <li key={props.id} onClick={(e) => props.handleClick(e, props.id)} className='orders__list-item'>
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