
const queryParser = query => {
    const removeKeys = ['limnit','offset']
    const value = query.reduce()

    console.log(query)
}

module.exports = { queryParser }



/*
const removeKey = (k = "", { [k]:_, ...o } = {}) =>
  o

const removeKeys = (keys = [], o = {}) =>
  keys .reduce ((r, k) => removeKey (k, r), o)

const values =
  [ { a: 1, x: 1 }
  , { a: 1, y: 1 }
  , { a: 1, z: 1 }
  ]

console .log (values .map (v => removeKeys (['a', 'z'], v)))
// [ { x: 1 }, { y: 1 }, {} ]
*/