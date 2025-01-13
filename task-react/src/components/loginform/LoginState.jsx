import { useState } from "react";
import "./login.css";

 function LoginState() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
    
  });
  const [didEdit, SetDidEdit] = useState({
    email: false,
    password :false
  });
  const emailIsInvalid = didEdit.email && !formData.email.includes("@");

  const handleChange = (identifier, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));
    SetDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]:false
    }))
    
  };
  const handleInputBlur = (identifier) => {
    SetDidEdit(prevEdit =>({
      ...prevEdit,
      [identifier]:true
    }))

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={()=>handleInputBlur("email")}
        />
        <div className="control-error">
        {emailIsInvalid && <p>please enter a valid email</p>}
        </div>
      </div>

      <div className="control">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </div>

      <p className="form-actions">
        <button className="button" >Login</button>
      </p>
    </form>
  );
};

export default LoginState;
