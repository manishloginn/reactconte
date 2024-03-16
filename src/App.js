import { useState } from "react";
import "./index.css"


function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConformPasswordError] = useState(false)

  const validateEmail = () => {
    const isValid = email.includes("@")
    setEmailError(!isValid)
    return isValid
  }


  const validatePassword = () => {
    const isValid = password.length>=8;
    setPasswordError(!isValid)
    return isValid
  }

  const validateConfirmPassword = () => {
    const isValid = password === confirmPassword;
    setConformPasswordError(!isValid)
    return isValid
  }


 function handleSignUp(e) {
  e.preventDefault()
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword()
  const isConfirmPasswordValid  = validateConfirmPassword()

if (isEmailValid & isPasswordValid & isConfirmPasswordValid) {
  alert('Form submitted Successfully !')
} else alert('form cannot be submitted')
  
 }





  return (
    <>
   
    <form className="form">
      <label htmlFor="email">Email:</label>
      <input type="email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      style={{border: emailError ? "1px solid red" : ""}}
      />
        {emailError && <span style={{ color: "red" }}>Email is not valid</span>}


      <label htmlFor="password">Password:</label>
      <input type="password"
      value={password}
      onChange={(e) => setPassword (e.target.value)}
      style={{border: passwordError ? "1px solid red" : "" } }
      
      />
       {passwordError && <span style={{ color: "red" }}>password is not valid</span>}
      



      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword (e.target.value)}
        style={{border : confirmPasswordError ? "1px solid red" : ""}}
      
      />
      {confirmPasswordError && <span style={{ color: "red" }}>password is not match</span>}


      <button type="submit" onClick={handleSignUp}>Sign Up</button>
    </form>
    
    </>
  );
}

export default App;
