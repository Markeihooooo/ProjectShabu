// const express = require('express');
// const app = express();
// const db = require('./db');
// const axios = require('axios');
// require('dotenv').config();

// app.get('/external-api', async (req, res) => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');  // ตัวอย่างเรียก external API
//       res.json(response.data);
//     } catch (error) {
//       res.status(500).json({ error: 'Something went wrong!' });
//     }
//   });




// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/users', async (req, res) => {
//   const result = await db.query('SELECT * FROM users');
//   res.json(result.rows);
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });
const express = require('express');
const app = express();
const db = require('./db');
const axios = require('axios');
require('dotenv').config();

app.use(express.json());

app.get('/external-api', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');  // ตัวอย่างเรียก external API
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM public."user"');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

// เส้นทางสำหรับสมัครสมาชิก
app.post('/register', async (req, res) => {
  const { user_name, user_pass } = req.body; // ดึงข้อมูลจาก request body

  // ตรวจสอบว่ามีข้อมูลครบถ้วน
  if (!user_name || !user_pass) {
    return res.status(400).json({ error: 'Please provide both username and password.' });
  }

  try {
    // คำสั่ง SQL สำหรับการเพิ่มข้อมูลผู้ใช้
    await db.query('INSERT INTO public."user" (user_name, user_pass) VALUES ($1, $2)', [user_name, user_pass]);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});