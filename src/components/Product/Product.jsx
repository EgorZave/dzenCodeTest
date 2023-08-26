import "./products.scss";
const Product = ({ type, products, ordersTable }) => {

   return (
      <>
         {products.map((product) => {
            const { guarantee } = product

            const [uahPrice, usdPrice] = product.price
            return (
               <tr>
                  <td>{product.title}</td>
                  <td>{type}</td>
                  <td>{product.specification}</td>
                  {!ordersTable ? (
                     <>
                        <td>{uahPrice.value} <span className="price-bold">uah</span></td>
                        <td>{usdPrice.value} <span className="price-bold">usd</span></td>
                        <td>{(guarantee.start)}</td>
                        <td>{(guarantee.end)}</td>




                     </>
                  ) : null}

               </tr>
            )
         })}


      </>

   )

}
export default Product
