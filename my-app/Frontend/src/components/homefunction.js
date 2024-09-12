import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// ฟังก์ชันนำไปยังหน้า Register
export const useGoToRegister = () => {
  const navigate = useNavigate();
  return () => navigate('/register'); // เปลี่ยนเส้นทางไปหน้า Register
};

// ฟังก์ชันสำหรับการ login
export const submit = async () => {
  const user_name = document.querySelector('input[type="text"]').value;
  const user_pass = document.querySelector('input[type="password"]').value;

  if (!user_name || !user_pass) {
    Swal.fire({
      title: 'Error!',
      text: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน',
      icon: 'error',
      confirmButtonText: 'ตกลง'
    });
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_name, user_pass }),
    })

    const data = response.json();

    if (response.ok) {
      Swal.fire({
        title: 'สำเร็จ!',
        text: 'คุณเข้าสู่ระบบเรียบร้อยแล้ว',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      }).then(() => {
        localStorage.setItem('token', data.token);
        window.location.href = '/home'; // เปลี่ยนเส้นทางไปหน้า Home
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: data.error || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      });
    }
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: 'เกิดข้อผิดพลาดในระบบ',
      icon: 'error',
      confirmButtonText: 'ตกลง'
    });
  }
};