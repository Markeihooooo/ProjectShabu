import axios from 'axios';

// ฟังก์ชันสำหรับการสมัครสมาชิก
export const handleRegister = async (userName, userPass) => {
  try {
    const response = await axios.post('http://localhost:3001/register', {
      user_name: userName,
      user_pass: userPass,
    });
    return response.data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};