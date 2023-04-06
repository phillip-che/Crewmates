import { Outlet, Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const Layout = () => {
    return (
        <div>
            <nav>
                <SideBar />
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout