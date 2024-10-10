import app from './app.js';
import pool from './db.js';

app.get('/api', async (req, res)=>{
  const result = await pool.query("SELECT NOW()")
  res.send(result[0]);
})