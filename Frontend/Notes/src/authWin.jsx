import { useState } from "react";
import authWindowStyles from "./authWindowStyles.module.css"






function AuthWindow(){
    const [isRegistered,setIsRegistered] = useState(true);
    const [hasError,setHasError] = useState(true);
    return(
    <div className={authWindowStyles.windowBackdrop}>
        <div className={authWindowStyles.window}>
            <div className={authWindowStyles.windowContents}>
            <h4 className={authWindowStyles.welcome}> WELCOME TO EASYNOTES</h4>

            <div className={authWindowStyles.inputSection}>
            { isRegistered && <label htmlFor="email" className={authWindowStyles.label} > Name</label>}
            { isRegistered && <input type="text" className={authWindowStyles.input} id = "eInput"placeholder="e.g James" />}

                <label htmlFor="email" className={authWindowStyles.label}> Email</label>
                <input type="text" id = "email" className={authWindowStyles.input}  placeholder="e.g john@gtk.com" />
                <label htmlFor="email" className={authWindowStyles.label}> Password</label>
                <input type="text" className={authWindowStyles.input} id = "password"placeholder="" />
            
            </div> { hasError && <label htmlFor="email" className={authWindowStyles.error} > Invalid email or Incorect password</label>}
           
            <div className={authWindowStyles.buttonSection}>
           
            {isRegistered &&<button className={authWindowStyles.button} onClick={() => {
                setIsRegistered(!isRegistered); console.log("register click"); }}>Already Have Account</button>}
         
           {!isRegistered &&<button className={authWindowStyles.button} onClick={() => {
                setIsRegistered(!isRegistered); console.log("register click"); }}>Create New Account</button>}
            
            {isRegistered && <button className={authWindowStyles.button}>Register</button>}
           {!isRegistered && <button className={authWindowStyles.button}>Sign In</button>}
           

          
            </div>
            
            
            </div>
            
            
            
        </div>
    
    </div>
        
    )
}

export default AuthWindow;