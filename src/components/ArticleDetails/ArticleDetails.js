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
          <div className='titleBox--container'>
            <h1 className='detailsTitle--text'>{articleDetails.title}</h1>
            <p className='subHeader--text'>{articleDetails.abstract}</p>
          </div>
          
          <img src={articleDetails.multimedia[0].url}></img>

        </div>
      )}
    </>
  )
}

export default ArticleDetails
