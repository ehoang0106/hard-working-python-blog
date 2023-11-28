import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>New Horizon Blog</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/sign-up">Sign up</Link>
                <Link to="/login">Login</Link>

            </div>
        </nav>


    );
}
 
export default Navbar;