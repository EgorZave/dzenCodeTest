import AnimatedRoutes from "./AnimatedRoutes"
import Header from "../components/Header/Header"
function AppRoutes() {

   return (
      <>
         <Header />
         <main className="main">
            <AnimatedRoutes />
         </main>
      </>
   )
}
export default AppRoutes