import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { AxiosInstance } from '../common/AxiosInstance';

const Login = () => {
  const [data,setData] = useState({
    username: "",
    password: ""
  })

  const handleData = (e)=>{
    const value = e.target.value;
    const name = e.target.name;

    setData({...data,[name]:value});
  }

  const sendData = async ()=>{
    if(data.username && data.password){
      try {
        const res = await AxiosInstance.post('/api/v1/users/login', data);
        sessionStorage.setItem('token',res.data.token);
        if(res.status === 200){
          //main paga oklamaly
        }
      } catch ({response}) {
        console.log(response.data.status)
        if(response.data.status === 400){
          alert("Username or password wrong")
        }
      }
    }else{
      alert("Unexpected error in server side")
    }
  }

  return (
    <div className='login'>
      <div className='container'>
          <div className="login_container">
            <div className="login_top">
              <h2>Login</h2>
            </div>
            <div className="login_bottom">
              <label htmlFor="userName">Username</label>
              <input type="text" id="userName" name='username' onChange={(e)=>handleData(e)} />
              <br />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name='password' onChange={(e)=>handleData(e)} />
              <br />
              <Button onClick={sendData} variant="contained">Sign In</Button>
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