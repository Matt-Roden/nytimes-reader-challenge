import React, { useEffect, useState} from 'react'
import { Routes, Route} from "react-router-dom";
import '../../styles/App.css';
import { getHomeArticles, getArticlesByTopic } from '../../utils'
import CardsContainer from '../CardsContainer/CardsContainer';

function App() {
  const [articles, setArticles] = useState([])

  const onTopicSearch = (topic) => {
    getArticlesByTopic(topic).then(data => setArticles(data.results))
    // This will need to get passed down to the topic selector component
    // the value of the selected topic will be passed back up and strung through as arg
  }

  useEffect(() => {
    getHomeArticles().then(data => setArticles(data.results))
    // getArticlesByTopic('books').then(data => console.log("Book Articles: ", data.results))
  }, [])

  return (
    <div className="App">
      <h1>NYTimes Reader</h1>
      <Routes>
      <Route 
        exact path="/"
        element={
          <CardsContainer articles={articles}/>
        }
      />
      </Routes>
      
    </div>
  );
}

export default App;