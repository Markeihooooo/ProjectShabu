import React from 'react';
import './style.css';
import { useGoToRegister,submit } from './homefunction'; 

const Login = () => {
    const goToRegister = useGoToRegister();

  return (
    <div className="container">
      <div>
        <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/296123974_1096341914627508_5219895537905772823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2cAgqwCgKVMQ7kNvgHE4_ym&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=ARkghowasc0mlVxJyfUa40O&oh=00_AYCQJWTvwcrpxTKdnU0MgruqBmptfOGpvUBKqnRf-v9THg&oe=66E78BC6" alt="" />
      </div>
      <h1 className="welcome">ยินดีต้อนรับสู่ร้านชาบู</h1>
      <div><input type="text" placeholder="ID" /></div>
      <div><input type="password" placeholder="Password" /></div>
      <div><input onClick={goToRegister} type="submit" value="Register" /></div>
      <div><input onClick={submit} type="submit" value="Login" /></div>
    </div>
  );
};

export default Login;