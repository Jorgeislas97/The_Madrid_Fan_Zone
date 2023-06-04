const Player= require('../models/player');

module.exports = {
  createReview: create
};

async function create(req, res) {
  const player = await Player.findById(req.params.id);

  player.reviews.push(req.body);
  try {

    await player.save();
  } catch (err) {
    console.log(err);
  }

  res.redirect(`/players/${player._id}`);
}