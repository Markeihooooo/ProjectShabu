const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // ใช้ PostgreSQL client
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config(); // โหลดตัวแปรสิ่งแวดล้อมจาก .env

const app = express();

const secret = "Test@4%#$6*"

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

app.post('/login', async (req, res) => {
  const { user_name, user_pass } = req.body;
  if (!user_name || !user_pass) {
    return res.status(400).json({ error: 'Please provide both username and password.' });
  }
  try {
    const result = await pool.query('SELECT * FROM public."user" WHERE user_name = $1', [user_name]);
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(user_pass, user.user_pass);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
    const token = jwt.sign({ user_id: user.user_id }, secret, { expiresIn: '1d' });
    console.log(token)
    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Database error' });
  }
})

// เริ่มต้นเซิร์ฟเวอร์ที่พอร์ต 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});