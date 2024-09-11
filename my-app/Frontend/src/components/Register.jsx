import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from './registerFunction';
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
        <input onClick={goToLogin} className='back' type="button" value={"<"} />
      </div>
      <div>
        <img 
          src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/296123974_1096341914627508_5219895537905772823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2cAgqwCgKVMQ7kNvgHE4_ym&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=ARkghowasc0mlVxJyfUa40O&oh=00_AYCQJWTvwcrpxTKdnU0MgruqBmptfOGpvUBKqnRf-v9THg&oe=66E78BC6" 
          alt="Logo" 
        />
      </div>
      <div><h1>หน้าลงทะเบียน</h1></div>
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