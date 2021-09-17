import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = (props) => {
  // console.log('Login.js ln:5 props', props);
  const [credentials, setCredentials] = useState(
    {
      username: "",
      password: ""
    }
  )
  const [error, setError] = useState("");
  const { push } = useHistory();

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      return (setError("Username or Password not valid."))
    } else {
      axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
          // console.log('Login.js ln:30 res', res);//Use Lambda School to test
          // console.log('Login.js ln:31 res.data', res.data);
          // console.log('Login.js ln:32 res.data', res.data.payload);
          localStorage.setItem("token", res.data.payload);
          push('bubbles');
          setError("")

        })
        .catch(err => {
          setError("Error logging in");
        })
    }
  }


  return (
    <div>
      <h1>Welcome to Rick's Fun Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">

        <form onSubmit={submit}>

          <label >Username:</label>
          <input
            id="username"
            data-testid="username"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />

          <label>Password:</label>
          <input
            id="password"
            data-testid="password"
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />

          <div>
            <button data-testid="submit"
              id="submit" >Login
            </button>
          </div>

        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"