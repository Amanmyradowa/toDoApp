import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { AxiosInstance } from '../common/AxiosInstance';
// import Done from '../../public/images/Done.svg'

const Register = () => {
  const [data,setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleData = (e)=>{
    const value = e.target.value;
    const name = e.target.name;

    setData({...data,[name]:value});
  }

  const sendData = async ()=>{
    if(data.username && data.email && data.password){
      try {
        const res = await AxiosInstance.post('/api/v1/users/register', data);
        sessionStorage.setItem('token',res.data.token);
        if(res.status === 200){
          //main paga oklamaly
        }
      } catch ({response}) {
        console.log(response.data.status)
        if(response.data.status === 'confilct'){
          alert("Bu username yada email eyyam bar")
        }
      }
    }else{
      alert("Boshluklary dolduryn")
    }
  }
  return (
      <div className="register">
        <div className='container'>
          <div className="register_container">
            <div className="register_top">
              <h2>Register</h2>
            </div>
            <div className="register_bottom">
              <label htmlFor="userName">Username</label>
              <input type="text" id="userName" name='username' onChange={(e)=>handleData(e)}/>
              <br />
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name='email' onChange={(e)=>handleData(e)}/>
              <br />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name='password' onChange={(e)=>handleData(e)}/>
              <br />
              <Button onClick={sendData} variant="contained">Register</Button>
            </div>
          </div>
          <div className="register_btn">
            <Link to={'/'}>
              <Button variant="contained">Login</Button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Register