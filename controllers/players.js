const Player = require('../models/player');

module.exports = {
  index,
  show,
  new: newPlayer,
  create
};

async function index(req, res) {
  const players = await Player.find({});
  res.render('players/index', { title: 'All Players', players });
}

async function show(req, res) {
  const player = await Player.findById(req.params.id);
  res.render('players/show', { title: 'Player Detail', player });
}

function newPlayer(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('players/new', { title: 'Add Player', errorMsg: '' });
}

async function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Player.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the player index after we implement it
    res.redirect('/players');  // Update this line
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    res.render('players/new', { errorMsg: err.message });
  }
}
