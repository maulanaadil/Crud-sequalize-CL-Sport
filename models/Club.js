const { DataTypes } = require('sequelize');
const db = require('../database');
const Player = require('./Player');

const Club = db.define('Club', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING(80),
  country: DataTypes.STRING(80),
});

Club.hasMany(Player);
Player.belongsTo(Club);

module.exports = Club;
