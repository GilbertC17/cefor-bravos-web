const Notice = require('../models/notice.model');

exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.findAll();
    res.status(200).send(notices);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching notices', error });
  }
};