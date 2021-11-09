import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import '../../styles/CardsContainer.css'

const CardsContainer = ({ articles }) => {
  //map out ArticleCards
  //render in the return statement

  const cards = articles.map((article, index) => {
    return (
      <ArticleCard details={article} key={index} />
    )
  })

  return (
    <div className="articleCards--container">
      {cards}
    </div>
  )
}

export default CardsContainer