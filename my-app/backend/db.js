const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'localhost',  // ใช้ 'postgres' ถ้าคุณใช้ Docker Compose
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};