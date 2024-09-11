import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from './registerfunction';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const navigate = useNavigate();

  const onRegister = async () => {
    try {
      await handleRegister(userName, userPass);
      alert('Registration successful!');
      navigate('/'); // เปลี่ยนเส้นทางไปหน้า Login
    } catch (error) {
      alert('Registration failed');
    }
  };

  const goToLogin = () => {
    navigate('/'); // เปลี่ยนเส้นทางไปหน้า Login
  };

  return (
    <div className="container">
      <div>
        <input onClick={goToLogin} className='back' type="submit" value={"<"} />
      </div>
      <div>
        <img src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/296123974_1096341914627508_5219895537905772823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2cAgqwCgKVMQ7kNvgHE4_ym&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=ARkghowasc0mlVxJyfUa40O&oh=00_AYCQJWTvwcrpxTKdnU0MgruqBmptfOGpvUBKqnRf-v9THg&oe=66E78BC6" alt="" />
      </div>
      <div><h1>หน้าลงทะเบียน</h1></div>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={userPass}
          onChange={(e) => setUserPass(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Register" onClick={onRegister} />
      </div>
    </div>
  );
};

export default Register;