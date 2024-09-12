import { useNavigate } from 'react-router-dom';
export const useGoToRegister = () => {
    const navigate = useNavigate();  // ใช้ useNavigate สำหรับเปลี่ยนเส้นทาง
  
    return () => {
      navigate('/register');  // ฟังก์ชันสำหรับเปลี่ยนไปหน้า register
    };
  };


  


export const submit = () => {
    alert('ยินดีต้อนรับสู่ร้านชาบู');
};

