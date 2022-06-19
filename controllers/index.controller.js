module.exports = {
  index: async (req, res) => {
    const name = 'Adil gans';

    return res.render('index', { name, title: 'Dashboard' });
  },
};
