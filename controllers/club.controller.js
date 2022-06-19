const Club = require('../models/Club');

module.exports = {
  index: async (req, res) => {
    const clubs = await Club.findAll();

    return res.render('clubs/index', {
      clubs,
    });
  },

  create: async (req, res) => {
    return res.render('clubs/create');
  },

  store: async (req, res) => {
    await Club.create({
      name: req.body.name,
      country: req.body.country,
    });

    return res.redirect('/clubs');
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await Club.destroy({
      where: {
        id: id,
      },
    });

    return res.redirect('/clubs');
  },

  change: async (req, res) => {
    const id = req.params.id;
    const clubById = await Club.findOne({
      where: { id: id },
    });
    return res.render('clubs/edit', {
      clubById,
    });
  },
  edit: async (req, res) => {
    await Club.update(
      {
        name: req.body.name,
        country: req.body.country,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    return res.redirect('/clubs');
  },
};
