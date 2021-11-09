import React from 'react'
import '../../styles/ArticleCard.css'

const ArticleCard = ({ details, key }) => {
  return (
    <article className='articleCard--container'>
      <div className='textWrapper--container'></div>
      <div className='pictureWrapper--container'></div>
    </article>
  )
}

export default ArticleCard