import bcrypt from 'bcryptjs';


export const HashPassword = async (nakedPass) =>{

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(nakedPass,salt);
        
        return hashedPass;
    } catch (error) {
        console.log("Error Hashing password");
    }
   

}

export const CompareHash = async (nakedPass,hashedPass) =>{

    try {
        
       
      ///=  console.log(`nkP ${nakedPass} === ${hashedPass}`);
        const valid = await bcrypt.compare(nakedPass,hashedPass);
       // console.log(valid);
        return valid;
    } catch (error) {
        console.log("Error Comparing Hashed password");
    }
   
    
}

