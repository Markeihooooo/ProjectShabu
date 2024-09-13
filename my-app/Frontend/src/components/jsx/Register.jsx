import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../function/registerfunction';


import Swal from 'sweetalert2';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า

    try {
      await handleRegister(userName, userPass);
      // แสดงการแจ้งเตือนสำเร็จ
      Swal.fire({
        title: 'สำเร็จ!',
        text: 'คุณได้สมัครสมาชิกเรียบร้อยแล้ว',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      }).then(() => {
        navigate('/'); // เปลี่ยนเส้นทางไปหน้า Login
      });
    } catch (error) {
      // แสดงการแจ้งเตือนข้อผิดพลาด
      Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: 'มีปัญหาในการสมัครสมาชิก',
        icon: 'error',
        confirmButtonText: 'ลองอีกครั้ง'
      });
    }
  };

  const goToLogin = () => {
    navigate('/'); // เปลี่ยนเส้นทางไปหน้า Login
  };

  return (
    <div className="container">
      <div>
        <input onClick={goToLogin}   className='back' type="submit" value={"<"} />
      </div>
      <div>
        <img 
          src="
          https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHkZ0S0Zu28gnwMbYWIhksr55-N8IgMyYiQ&s
          " 
          alt="Logo" 
        />
      </div>
      <div><h1>Register for oder <br/>Menu</h1></div>
      <form onSubmit={onRegister}>
        <div>
          <input
            type="text"
            placeholder="ID"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
            required
          />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;