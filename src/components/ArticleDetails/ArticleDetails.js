import { Link, Redirect } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const ArticleDetails = ({ details, articles }) => {
  const [articleDetails, setArticleDetails] = useState(details)

  const findArticle = () => {
    return articles.find(article => article.id === details.id)
  }

  useEffect(() => {
    const storyDetails = findArticle()
    console.log(storyDetails, 'SD')
    setArticleDetails(storyDetails)
  }, [])

  return (
    <>
      {!details && <Redirect to='/' />}
      {details && (
        <div>
          <Link to='/'>
          <button>Home</button>
          </Link>
          <h1>{articleDetails.title}</h1>
        </div>
      )}
      
    </>
  )
}

export default ArticleDetails
