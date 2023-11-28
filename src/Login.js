import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import './login.css';

const Login = () => {

    const history = useHistory();


    const handleSubmit = (e) =>{
        e.preventDefault(); //prevent refresh the page after hit the 
        //history.push('/sign-in'); //return to sign-in page
    }

    
    
    return (
        
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div class="label-and-input">
                <label>Email: </label>
                    <input type="text" 
                    required
                    name="email"
                    id="email-field"
                    className="login-form-field"
                    placeholder="Enter your email address"
                    
                    />
                </div>
                

                
                <label>Password: </label>
                <input type="password" 
                required
                name="password"
                id="password-field"
                className="login-form-field"
                placeholder="Enter password"
                
                />
                
                <div className="forget-pw">
                    <div className="link">
                        <Link to="reset-password">Forget your password?</Link>
                    </div>
                </div>

                

                <button type="submit" class="login-btn-2">Log in</button>

                
                
                

            </form>
            

        </div>

        


    );
}

export default Login