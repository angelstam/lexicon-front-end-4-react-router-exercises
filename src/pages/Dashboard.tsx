import { Outlet } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";


export default function Dashboard() {
    return (
        <article>
            <h1>Dashboard</h1>
            <NavbarDashboard />
            <Outlet />
        </article>
    )
}
