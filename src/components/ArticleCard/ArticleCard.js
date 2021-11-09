import React from 'react'
import '../../styles/ArticleCard.css'

const ArticleCard = ({ details }) => {
  return (
    <article className='articleCard--container'>
      <div className='textWrapper--container'>
        <h3 className='title--text'>{details.title}</h3>
        <p className='abstract--text'>{details.abstract}</p>
      </div>
      <div className='pictureWrapper--container'>
        <img src={details.multimedia[3].url}/>
        <p>Copyright: {details.multimedia[0].copyright}</p>

      </div>
    </article>
  )
}

export default ArticleCard