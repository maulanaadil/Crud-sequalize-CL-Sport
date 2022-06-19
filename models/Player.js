const { DataTypes } = require('sequelize');
const db = require('../database');

const Player = db.define('Player', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING(80),
  age: DataTypes.INTEGER,
});

module.exports = Player;
