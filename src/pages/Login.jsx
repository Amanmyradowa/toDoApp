import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Login = () => {
  const [data,setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  return (
    <div className='login'>
      <div className='container'>
          <div className="login_container">
            <div className="login_top">
              <h2>Login</h2>
            </div>
            <div className="login_bottom">
              <label htmlFor="userName">Username</label>
              <input type="text" id="userName" name='username' />
              <br />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name='password' />
              <br />
              <Button variant="contained">Sign In</Button>
            </div>
          </div>
          <div className="register_btn">
            <Link to={'/register'}>
              <Button variant="contained">Register</Button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Login