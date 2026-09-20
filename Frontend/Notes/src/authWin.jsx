import { useState } from "react";
import authWindowStyles from "./authWindowStyles.module.css"






function AuthWindow({signInFunc,RegisterFunc}){
    const [isNotRegistered,setIsRegistered] = useState(false);
    const [hasError,setHasError] = useState(false);
    const [pass,setPass] = useState("");
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");

    
        

    
    return(
    <div className={authWindowStyles.windowBackdrop}>
        <div className={authWindowStyles.window}>
            <div className={authWindowStyles.windowContents}>
            <h4 className={authWindowStyles.welcome}> WELCOME TO EASYNOTES</h4>

            <div className={authWindowStyles.inputSection}>
            { isNotRegistered && <label htmlFor="email" className={authWindowStyles.label} > Name</label>}
            { isNotRegistered && <input type="text" className={authWindowStyles.input} id = "eInput"placeholder="e.g James" onChange={(eve) => {setName(eve.target.value)}}/>}

                <label htmlFor="email" className={authWindowStyles.label}> Email</label>
                <input type="text" id = "email" className={authWindowStyles.input}  placeholder="e.g john@gtk.com" onChange={(eve) => {setEmail(eve.target.value)}}/>
                <label htmlFor="email" className={authWindowStyles.label} > Password</label>
                <input type="text" className={authWindowStyles.input} id = "password" placeholder="" onChange={(eve) => {setPass(eve.target.value)}} />
            
            </div> { hasError && <label htmlFor="email" className={authWindowStyles.error} > Invalid email or Incorect password</label>}
           
            <div className={authWindowStyles.buttonSection}>
           
            {isNotRegistered &&<button className={authWindowStyles.button} onClick={() => {
                setIsRegistered(!isNotRegistered); console.log("register click"); }}>Already Have Account</button>}
         
           {!isNotRegistered &&<button className={authWindowStyles.button} onClick={() => {
                setIsRegistered(!isNotRegistered); console.log("register click"); }}>Create New Account</button>}
            
            {isNotRegistered && <button className={authWindowStyles.button} onClick={() => RegisterFunc(name,email,pass)}>Register</button>}
           {!isNotRegistered && <button className={authWindowStyles.button} onClick={() => signInFunc(email,pass)}>Sign In</button>}
           

          
            </div>
            
            
            </div>
            
            
            
        </div>
    
    </div>
        
    )
}

export default AuthWindow;