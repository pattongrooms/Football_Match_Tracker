const Match = require('../models/match')

module.exports = {
  create,
  delete: deleteComment
}

async function create(req, res) {
  const match = await Match.findById(req.params.id)
  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar
  // pushing or unshift subdocs into mongoose arrays
  console.log(req.body)
  match.gameInfos.push(req.body)
  try {
    // save changes made to match doc
    await match.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/matches/${match._id}`)
}

async function deleteComment(req, res, next) {
  const matches = await Match.find({})

  matches.forEach((match, idx) => {
    match.gameInfos.forEach((game, idc) => {
      if (game.id === req.params.id) {
        match.gameInfos.splice(idc, 1)

        match.save()
        res.redirect(`/matches/${match.id}`)
      }
    })
  })
}
