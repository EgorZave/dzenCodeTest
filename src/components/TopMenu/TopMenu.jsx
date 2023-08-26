import { useEffect } from "react";
import { useState } from "react";

const TopMenu = () => {
   const date = new Date();
   const [dateNow, setDateNow] = useState(date.toLocaleTimeString())

   useEffect(() => {
      const intervalId = setInterval(() => {
         setDateNow(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(intervalId);
   }, []);

   return (
      <>
         <span className="header__timer">
            {dateNow}
         </span>
      </>
   )

}
export default TopMenu