import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ArticleCard.css'

const ArticleCard = ({ details }) => {
  return (
    <Link to={`/${details.id}`} >
      <article className='articleCard--container'>
        <div className='textWrapper--container'>
          <h3 className='title--text'>{details.title}</h3>
          <p className='abstract--text'>{details.abstract}</p>
        </div>
        <div className='pictureWrapper--container'>
          <img className='cardImage--img' src={details.multimedia[0].url}/>
          <p>Copyright: {details.multimedia[0].copyright}</p>
        </div>
      </article>
    </Link>
    
  )
}

export default ArticleCard