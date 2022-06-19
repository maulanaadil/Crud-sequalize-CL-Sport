const Club = require('../models/Club');
const Player = require('../models/Player');

module.exports = {
  index: async (req, res) => {
    const players = await Player.findAll({ include: Club });

    return res.render('players/index', {
      players,
    });
  },

  create: async (req, res) => {
    const clubs = await Club.findAll();

    return res.render('players/create', {
      clubs,
    });
  },

  store: async (req, res) => {
    await Player.create({
      name: req.body.name,
      age: req.body.age,
      ClubId: req.body.club,
    });

    return res.redirect('/players');
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Player.destroy({
      where: {
        id: id,
      },
    });

    return res.redirect('/players');
  },

  change: async (req, res) => {
    const id = req.params.id;
    const playerById = await Player.findOne({
      where: { id: id },
      include: Club,
    });
    const clubs = await Club.findAll();

    return res.render('players/edit', {
      playerById,
      clubs,
    });
  },

  edit: async (req, res) => {
    await Player.update(
      {
        name: req.body.name,
        age: req.body.age,
        ClubId: req.body.club,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    return res.redirect('/players');
  },
};
