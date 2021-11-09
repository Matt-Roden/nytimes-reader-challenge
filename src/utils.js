const API_KEY = "GsNXNQlz60M6Dc1Pum7oDqRHwAexkGq2"
const base_url = "https://api.nytimes.com/svc/topstories/v2/TOPIC.json?api-key=yourkey"
const homePageArticlesURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GsNXNQlz60M6Dc1Pum7oDqRHwAexkGq2"

export const getHomeArticles = () => {
  return fetch(homePageArticlesURL)
    .then(response => response.json())
    .catch(err => console.log('Error: ', err))
}

export const getArticlesByTopic = (topic) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=GsNXNQlz60M6Dc1Pum7oDqRHwAexkGq2`)
    .then(response => response.json())
    .catch(err => console.log("Error: ", err))
}