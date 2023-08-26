import { NavLink } from "react-router-dom";
import "./navigationMenu.scss"
const NavigationMenu = () => {

   return (
      <>
         <div className="navigation">
            <nav className="navigation__menu">
               <ul className="navigation__menu-list">
                  <li className="navigation__menu-item">

                     <NavLink className="navigation__menu-link" to={"/"}>
                        Home
                     </NavLink>
                  </li>
                  <li className="navigation__menu-item">

                     <NavLink className="navigation__menu-link" to={"/orders"}>
                        Orders
                     </NavLink>
                  </li>
                  <li className="navigation__menu-item">
                     <NavLink className="navigation__menu-link" to={"/products"}>
                        Products
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </>
   )

}
export default NavigationMenu;