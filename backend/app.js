require('dotenv').config(); // Asegúrate de requerir dotenv al principio del archivo
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db.config');
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes'); // Importa las rutas del administrador
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
db.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  db.sync()
  .then(() => {
    console.log('Base de datos sincronizada.');
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes); // Registra las rutas del administrador
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});