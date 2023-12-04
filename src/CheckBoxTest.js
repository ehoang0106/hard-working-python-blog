
import './changepassword.css';

import CheckBox from "./CheckBox";

const ChangePassword = () => {

        



    return (  

        
        <div className="change-password">
            <h2>Change Password</h2>
            
            <form>

               


                <div className="label-and-input">
                    <label>Email</label>
                    <input
                    required
                    type="text"
                    name="email"
                    id="email-field"
                    placeholder="Enter your email address"
                    
                    />
                </div>

                <div className="label-and-input">
                    <label>Old password</label>
                    <input
                    required
                    type="text"
                    name="old-password"
                    id="old-pw-field"
                    placeholder="Enter old password"
                    
                    
                    />
                </div>

                {/* <div className="label-and-input">
                    <label>New password</label>
                    <input
                    required
                    type="text"
                    name="new-password"
                    id="new-pw-filed"
                    placeholder="Enter new password"
                    
                    
                    />
                </div> */}

                <CheckBox/>
                


                <div className="label-and-input">
                    <label>Confirm new password</label>
                    <input
                    required
                    type="text"
                    name="confirm-new-password"
                    id="confirm-new-pw-filed"
                    placeholder="Confirm new password"
                    
                    
                    />
                </div>

                <button type="submit" class="submit-btn">ChangePassword</button>

            </form>
        </div>
    );
}
 
export default ChangePassword;