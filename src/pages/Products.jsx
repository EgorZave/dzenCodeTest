import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import Product from "../components/Product/Product";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./products.scss";
import transition from "../transition";

function Products() {
   const { products } = useSelector((state) => state.products);
   const [selectedType, setSelectedType] = useState("all");

   const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
   };

   const filteredProducts = selectedType === "all" ? products : products.filter(product => product.type === selectedType);

   return (
      <>
         <NavigationMenu />
         <section className="products">
            <select name="productType" id="productType" onChange={handleTypeChange}>
               <option value="all">All Products</option>
               <option value="Monitors">Monitors</option>
               <option value="Laptops">Laptops</option>
               <option value="Keyboards">Keyboards</option>
            </select>
            <table className="table table-striped products-table">
               <thead>
                  <tr>
                     <th scope="col">Title</th>
                     <th scope="col">Type</th>
                     <th scope="col">Specification</th>
                     <th scope="col">Price: UAH</th>
                     <th scope="col">Price: USD</th>
                     <th scope="col">Guarantee Start</th>
                     <th scope="col">Guarantee End</th>


                  </tr>
               </thead>
               <tbody>
                  {filteredProducts.map((product) => {
                     return (
                        <Product key={product.id} {...product} />
                     );
                  })}
               </tbody>
            </table>
         </section>
      </>
   );
}

export default transition(Products);
