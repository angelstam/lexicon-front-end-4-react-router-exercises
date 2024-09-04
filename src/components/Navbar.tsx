import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
    )
}
