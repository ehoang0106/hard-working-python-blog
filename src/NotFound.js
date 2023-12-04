import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        
        <div className="not-found">
            <div className="pic-404-mike">
                <img src="/mike.png" className="centered-image"/>
            </div>  
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to homepage...</Link>
        </div>
    );
}

export default NotFound;