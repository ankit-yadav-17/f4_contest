import React,{useState} from "react"
import facebooklogo from "../images/facebook-logo.jpeg"
import googlelogo from "../images/google -logo.jpg"
import abstraction from "../images/Abstraction.png"



const FormValidation = () =>{

    //user object state
let [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

//error message state
let [error, setError] = useState("");

//success message state
let [success, setSuccess] = useState("");

function formSubmit(event) {
    
    //prevent default events
  event.preventDefault();


  //clear error and success message after 2 sec
  setTimeout(() =>{
    setError("");
    setSuccess("");
  },2000)


  //gives error if name is empty or too short or too long
  if (user.name.length < 3 || user.name.length > 30) {
    setSuccess("");
    setError("Name should be min 3 char and max 30 char");
    return;
  } 

  //gives error if email input is empty
  else if (user.email.length == 0) {
    setSuccess("");
    setError("Email shouldn't be empty");
    return;
  } 
  
  //gives error if email address doesn;t includes @ and .
  else if(!user.email.includes("@") || !user.email.includes(".")) {
    setSuccess("");
    setError("Email should contains @ and .")
    return
  }

  //gives error if password is too short
  else if (user.password.length < 8) {
    setSuccess("");
    setError("Password should contain min 8 char");
    return;
  } 
  
  //gives error if password and confirmPassword didn't match
  else if (user.confirmPassword !== user.password) {
    setSuccess("");
    setError("Please Make sure your password and confirm password match!");
    return;
  }

  //gives success message if no error occurred
  setSuccess("Successfully Created!");
  setError("");
  
}









    return (
      <div className="MainDiv">

      {/* left side of the webpage */}
        <div className="left-div">
            <div className="left-upper-div">
                <p>Find 3D Objects, Mockups and Ilustration here</p>
            </div>

            <div className="left-lower-div">
                <img src={abstraction}/>
            </div>
        </div>


        {/* right side of the webpage */}
        <div className="right-div">
          <h1>Create Account</h1>

          <div className="google-facebook">
            <div className="google">
              <img src={googlelogo} alt="google logo" />
              <a href="#">Sign up with Google</a>
            </div>

            <div className="facebook">
              <img src={facebooklogo} alt="facebook logo" />
              <a href="#">Sign up with Facebook</a>
            </div>
          </div>

          <p id="or">-- OR --</p>


        {/* user input form */}
          <form onSubmit={formSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(event) =>
                setUser({ ...user, name: event.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />

            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(event) =>
                setUser({ ...user, confirmPassword: event.target.value })
              }
            />

              {/* submit button */}
            <button type="submit" className="submit-btn">Create Account</button>
          </form>

              {/* error and success message */}
          {error !== "" && <p className="errorClass">ERROR: {error}</p>}
          {success !== "" && <p className="successClass">{success}</p>}
        </div>
      </div>
    );
}

export default FormValidation;