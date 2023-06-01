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

// i have id of the match in url but id being passed in with button is
// for the gameInfo (req.params.id) which is an id field inside of the embedded schema for matches
// currently match in function below is not being found bc it's trying to query and find the gameInfos.id field matching the req.params.id but the gameInfos.id value contains "new objectId("long number below")" where as the req.params.id is just the id
// it's getting hung up on mongoose keywords
// we need to find out how to make sure it doesn't read key words during the query so it can compare the actual value of the id

async function deleteComment(req, res, next) {
  const matches = await Match.find({})
  // console.log(matches)
  matches.forEach((match, idx) => {
    match.gameInfos.forEach((game, idc) => {
      if (game.id === req.params.id) {
        console.log(game.id)
        match.gameInfos.splice(idc, 1)
        console.log(match.gameInfos)
        match.save()
        res.redirect(`/matches/${match.id}`)
      }
    })
  })
}
