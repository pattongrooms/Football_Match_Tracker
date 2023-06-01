const Match = require('../models/match')

module.exports = {
  create
}

async function create(req, res) {
  const match = await Match.findById(req.params.id)
  // pushing or unshift subdocs into mongoose arrays
  console.log(req.body)
  match.gameInfo.push(req.body)
  try {
    // save changes made to match doc
    await match.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/matches/${match._id}`)
}
