import { Link } from 'react-router-dom'

const ArticleDetails = ({ details }) => {

  return (
    <div>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <h1>{details.title}</h1>
    </div>
  )
}

export default ArticleDetails
