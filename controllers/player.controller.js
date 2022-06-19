const Club = require('../models/Club');
const Player = require('../models/Player');

module.exports = {
  index: async (req, res) => {
    const players = await Player.findAll({ include: Club });

    return res.render('players/index', {
      players,
    });
  },

  //   create: async (req, res) => {
  //     return res.render('post/create');
  //   },

  //   store: async (req, res) => {
  //     await Post.create({
  //       title: req.body.title,
  //       content: req.body.content,
  //     });

  //     return res.redirect('/posts');
  //   },

  //   delete: async (req, res) => {
  //     const id = req.params.id;
  //     await Post.destroy({
  //       where: {
  //         id: id,
  //       },
  //     });

  //     return res.redirect('/posts');
  //   },

  //   change: async (req, res) => {
  //     const id = req.params.id;
  //     const postById = await Post.findOne({
  //       where: { id: id },
  //     });
  //     return res.render('post/edit', {
  //       postById,
  //     });
  //   },
  //   edit: async (req, res) => {
  //     await Post.update(
  //       {
  //         title: req.body.title,
  //         content: req.body.content,
  //       },
  //       {
  //         where: {
  //           id: req.body.id,
  //         },
  //       }
  //     );

  //     return res.redirect('/posts');
  //   },
};
