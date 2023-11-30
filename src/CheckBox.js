import { useState } from "react";
import './checkbox.css'
const CheckBox = () => {

    const[password, setPassword] = useState("");
    const[isCheckedLength, setIsCheckedLength] = useState(false);
    const[isUpperCase, setIsUpperCase] = useState(false);
    const[isLowerCase, setIsLowerCase] = useState(false);
    const[isDigit, setIsDigit] = useState(false);
    const[isSpecial, setIsSpecial] = useState(false);
    

    const checkPW = ()=> {

        const lengthPW = /^.{8,}$/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        
        setIsCheckedLength(lengthPW.test(password));
        setIsUpperCase(uppercaseRegex.test(password));
        setIsLowerCase(lowercaseRegex.test(password));
        setIsDigit(digitRegex.test(password));
        setIsSpecial(specialCharRegex.test(password));

    };

    return (
        
                
    
        <div className="checkbox-wrapper">
            
            <label>
                <input type="checkbox" 
                    checked={isCheckedLength}
                    onChange = {() => {}}
                    disabled
                    
                />
                
                <span>At least 8 characters long</span>
            
            </label>
            

            
            <label>
                <input type="checkbox" 
                    checked={isUpperCase}
                    onChange = {() => {}}
                    disabled
                    
                />
                
                <span>At least 1 uppercase</span>
            
            </label>
            


            <label>
                <input type="checkbox" 
                    checked={isLowerCase}
                    onChange = {() => {}}
                    disabled
                    
                />
                
                <span>At least 1 lowercase</span>
            
            </label>

            <label>
                <input type="checkbox" 
                    checked={isDigit}
                    onChange = {() => {}}
                    disabled
                    
                />
                
                <span>At least 1 digit</span>
            
            </label>
            
            <label>
                <input type="checkbox" 
                    checked={isSpecial}
                    onChange = {() => {}}
                    disabled
                    
                />
                
                <span>At least 1 special character</span>
            
            </label>

                
            <p>{isCheckedLength && isUpperCase && isLowerCase && isDigit && isSpecial ? "Your password is strong" : "Your password is too weak"}</p>

            <div className="typePW">
                <label>New password</label>
                <input
                type="password"
                required
                placeholder="Enter new password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                    checkPW();
                }}
                />
                
            </div>

            
            
            
            
            
            
            
        </div>
        
        
    );
};

export default CheckBox;


