import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function UserLayout(){
    return (
        <>
            <Outlet/>
        </>
    )
}
export default UserLayout;