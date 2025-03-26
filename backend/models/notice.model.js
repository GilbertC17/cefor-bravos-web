const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Notice = db.define('Notice', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'notices',
  timestamps: true // Esto habilita createdAt y updatedAt automáticamente
});

module.exports = Notice;