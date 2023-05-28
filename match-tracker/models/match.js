const matches = [
  { id: 125223, match: 'VS Giants', Win: true },
  { id: 127904, match: 'VS Bears', Win: false },
  { id: 139608, match: 'VS 49ers', Win: true }
]

module.exports = {
  getAll
}

function getAll() {
  return matches
}
