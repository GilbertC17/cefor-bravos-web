const express = require('express');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middleware');
const { createNotice } = require('../controllers/admin.controller');
const Notice = require('../models/notice.model');

// Configuración de multer para subir archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Ruta para crear noticias
router.post('/notices', authMiddleware.verifyToken, upload.single('image'), createNotice);

// Ruta para el panel de control
router.get('/control-panel', authMiddleware.verifyToken, (req, res) => {
  res.status(200).send({ message: 'Welcome to the admin control panel!' });
});

router.get('/notices', async (req, res) => {
  try {
    const notices = await Notice.findAll({
      order: [['createdAt', 'DESC']] // Ordenar por fecha de creación en orden descendente
    });
    res.status(200).send(notices);
  } catch (error) {
    console.error('Error al obtener las noticias:', error);
    res.status(500).send({ message: 'Error al obtener las noticias' });
  }
});

router.put('/notices/:id', authMiddleware.verifyToken, upload.single('image'), async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body);
    console.log('Archivo recibido:', req.file);

    const { id } = req.params;
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;

    const notice = await Notice.findByPk(id);
    if (!notice) {
      return res.status(404).send({ message: 'Noticia no encontrada' });
    }

    await notice.update({
      title,
      content,
      image: image || notice.image
    });

    const updatedNotice = await Notice.findByPk(id);

    res.status(200).send({ message: 'Noticia actualizada exitosamente', notice: updatedNotice });
  } catch (error) {
    console.error('Error al actualizar la noticia:', error);
    res.status(500).send({ message: 'Error al actualizar la noticia' });
  }
});


router.delete('/notices/:id', authMiddleware.verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    const notice = await Notice.findByPk(id);
    if (!notice) {
      return res.status(404).send({ message: 'Noticia no encontrada' });
    }

    await notice.destroy();
    res.status(200).send({ message: 'Noticia eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la noticia:', error);
    res.status(500).send({ message: 'Error al eliminar la noticia' });
  }
});


module.exports = router;