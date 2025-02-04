import { Outlet } from "react-router-dom";
import Navabar from "./Navbar";
import Footer from "./Footer";
function Layout(){
    return(
        <>
        <Navabar/>
        <Outlet/>
        <Footer/>
        </>
    );
}
export default Layout





