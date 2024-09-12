const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // ใช้ PostgreSQL client
const bcrypt = require('bcrypt')
require('dotenv').config(); // โหลดตัวแปรสิ่งแวดล้อมจาก .env

const app = express();

// ตั้งค่า CORS
app.use(cors());
app.use(express.json()); // ใช้เพื่อจัดการกับข้อมูล JSON ใน request body

// สร้างการเชื่อมต่อกับ PostgreSQL
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'localhost', // หรือชื่อโดเมนของฐานข้อมูล
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// ตรวจสอบการเชื่อมต่อกับฐานข้อมูล
pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

// Endpoint สำหรับหน้าแรก
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', async (req, res) => {
  try {
    
    const result = await pool.query('SELECT * FROM public."user"');
    res.json(result.rows); 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Database error' });
  }
});


app.post('/register', async (req, res) => {
  const { user_name, user_pass } = req.body;
  
  if (!user_name || !user_pass) {
    return res.status(400).json({ error: 'Please provide both username and password.' });
  }

  try {
    const passwordHash = await bcrypt.hash(user_pass, 12);
    await pool.query('INSERT INTO public."user" (user_name, user_pass) VALUES ($1, $2)', [user_name, passwordHash]);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Database error' });
  }
});













// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});