import Blue from "./bluetop";
import Nav from "./nav";
import Navmain from "./navMain";
import Sublink from "./sublink";

const Navbar = async () => {
    return ( 
        <div className="text-sm">
            <Blue />
            <Nav />
            <Navmain />
            <Sublink />
        </div>
     );
}
 
export default Navbar;