import React, { useEffect, useState} from 'react'
import '../../styles/App.css';
import { getHomeArticles, getArticlesByTopic } from '../../utils'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getHomeArticles().then(data => setArticles(data.results))
    getArticlesByTopic('books').then(data => console.log("Book Articles: ", data.results))
  }, [])

  return (
    <div className="App">
      NYTimes Reader
    </div>
  );
}

export default App;