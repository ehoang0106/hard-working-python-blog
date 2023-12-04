//import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom/cjs/react-router-dom";
import './signup.css';
//import { useState } from "react";
const SignUp = () => {

    const history = useHistory();

    // const [password, setPassword] = useState('');
    // const [pwConfirm, setPwConfirm] = useState('');

    // const checkPWStrength = () => {
    //     const lengthRegex = /^.{8,}$/;
    //     const uppercaseRegex = /[A-Z]/;
    //     const lowercaseRegex = /[a-z]/;
    //     const digitRegex = /\d/;
    //     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    //     let strength = 0;

    //     if (
    //         lengthRegex.test(password) &&
    //         uppercaseRegex.test(password) &&
    //         lowercaseRegex.test(password) &&
    //         digitRegex.test(password) &&
    //         specialCharRegex.test(password)
    //     ){
    //         return true;
    //     }
            
    //     return false;
    // };

    const handleClick = () => {
        history.push('/login')
    }
    


    
    const handleSubmit = (e) =>{
        e.preventDefault(); //prevent refresh the page after hit the submit button
        
        

        // if (!checkPWStrength()){
        //     alert('Password is too weak. Try again!');
        //     return;
        // }

        // if (password !== pwConfirm) {
        //     alert('Passwords does not match. Re-enter your passwords.');
        //     return;
        // }
        
    }

    

    
    return (  
        <div className="sign-up">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div class="label-and-input">
                <label>Full name: </label>
                    <input type="text" 
                    required
                    name="userName"
                    id="username-field"
                    className="signup-form-field"
                    placeholder="Enter your full name"
                    
                    />
                </div>
                

                <label>Email: </label>
                <input type="text" 
                required
                name="email"
                id="email-field"
                className="signup-form-field"
                placeholder="Enter your email address"
                
                />
                <label>Password: </label>

                <input type="password" 
                required
                name="password"
                id="password-field"
                className="signup-form-field"
                placeholder="Enter password"
                
                />
                <label>Re-enter password: </label>

                <input type="password" 
                required
                name="password"
                id="re-password-field"
                className="signup-form-field"
                placeholder="Re-enter password"
                
                />

                

                <button type="submit" class="signup-btn">Sign me up!</button>

                <div className="container">
                    <div className="have-account">Have an account?</div>
                    <button onClick={handleClick}class="login-btn-1">
                        Login
                    </button>

                </div>
                
                

            </form>

        </div>
    );
}

export default SignUp