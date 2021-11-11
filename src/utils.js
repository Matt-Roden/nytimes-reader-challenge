import { v4 as uuidv4 } from 'uuid';

// const API_KEY = "GsNXNQlz60M6Dc1Pum7oDqRHwAexkGq2"
// const homePageArticlesURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GsNXNQlz60M6Dc1Pum7oDqRHwAexkGq2"

// export const getHomeArticles = () => {
//   return fetch(homePageArticlesURL)
//     .then(response => response.json())
//     .catch(err => console.log('Error: ', err))
// }

export const getArticlesByTopic = (topic) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=GsNXNQlz60M6Dc1Pum7oDqRHwAexkGq2`)
    .then(response => response.json())
    .catch(err => console.log("Error: ", err))
}

export const addId = (data) => {
  return data.map(story => ({ ...story, id: uuidv4() }))
}