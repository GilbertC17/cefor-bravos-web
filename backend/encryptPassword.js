const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

const username = 'admin';
const password = 'Bravos20250';
const hashedPassword = bcrypt.hashSync(password, 8);

const query = 'UPDATE users SET password = ? WHERE username = ?';
connection.query(query, [hashedPassword, username], (err, res) => {
  if (err) throw err;
  console.log('Password updated:', { username });
  connection.end();
});