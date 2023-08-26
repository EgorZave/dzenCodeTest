import AnimatedRoutes from "./AnimatedRoutes"
import Header from "../components/header/header"
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