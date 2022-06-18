
const reduceQuery = query => {
  const where = []
  for (let key in query) {
    if(key != 'limit' && key != 'offset'){
      const o = {}
      o[key]=query[key]
      where.push(o)
    }
  }
  return where
}

const queryToUrlQuery = (query, limit, offset) => {
  let queryString = ''
  let addQuestionMarkWhenFirstQuery = true
  for (let key in query) {
    if(key != 'limit' && key != 'offset'){
      if (addQuestionMarkWhenFirstQuery) {
        queryString += '?'
      } else {
        queryString += '&'
      }
      addQuestionMarkWhenFirstQuery = false
      queryString += `${key}=${query[key]}`
    }
  }

  if (limit != undefined) {
    if ( addQuestionMarkWhenFirstQuery) {
      queryString += `?limit=${limit}`
      addQuestionMarkWhenFirstQuery = false
    } else {
      queryString += `&limit=${limit}`
    }
  }
  
  if (offset != undefined) {
    if (addQuestionMarkWhenFirstQuery) {
      queryString += `?offset=${offset}`
      addQuestionMarkWhenFirstQuery = false
    } else {
      queryString += `&offset=${offset}`
    }
  }

  return queryString
}

module.exports = { reduceQuery, queryToUrlQuery }
