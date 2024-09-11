import axios from 'axios';

// ฟังก์ชันสำหรับการสมัครสมาชิก
export const handleRegister = async (userName, userPass) => {
  try {
    console.log('Registering with:', { userName, userPass }); // ตรวจสอบค่าที่ส่งไปยัง API
    const response = await axios.post('http://localhost:3001/register', {
      user_name: userName,
      user_pass: userPass,
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response ? error.response.data : error.message);
    throw new Error('Registration failed');
  }
};