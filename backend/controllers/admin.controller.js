const Notice = require('../models/notice.model');

exports.createNotice = async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;

    const newNotice = await Notice.create({
      title,
      content,
      image
    });

    res.status(201).send({ message: 'Noticia creada exitosamente', notice: newNotice });
  } catch (error) {
    console.error('Error al crear la noticia:', error.message); // Agregar mensaje de error
    res.status(500).send({ message: 'Error al crear la noticia', error: error.message });
  }
};