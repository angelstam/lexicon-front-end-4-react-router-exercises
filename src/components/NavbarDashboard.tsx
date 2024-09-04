import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavbarDashboard() {

    return (
        <nav>
            <Link to="./stats">Stats</Link>
            <Link to="./settings">About</Link>
        </nav>
    )
}
