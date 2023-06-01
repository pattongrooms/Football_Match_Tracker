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

function deleteComment(req, res, next) {
  Match.findOne({
    'gameInfos.id': req.params.id,
    'gameInfos.user': req.user._id
  }).then(function (match) {
    if (!match) return res.redirect('/matches')
    match.gameInfos.remove(req.params.id)
    match
      .save()
      .then(function () {
        res.redirect(`/matches/${match._id}`)
      })
      .catch(function (err) {
        return next(err)
      })
  })
}
