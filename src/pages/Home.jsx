import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import './home.scss';
import transition from '../transition';

function Home() {
   return (
      <
         >
         <NavigationMenu />
         <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 }, overflow: "hidden" }}
         >Welcome!</div>
      </>
   )
}

export default transition(Home)


