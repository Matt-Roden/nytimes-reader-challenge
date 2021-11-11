import React, { useEffect, useState} from 'react'
import { Switch, Route} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import '../../styles/App.css';
import { getArticlesByTopic, addId } from '../../utils'
import CardsContainer from '../CardsContainer/CardsContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import TopicSelector from '../TopicSelector/TopicSelector';

function App() {
  const [articles, setArticles] = useState([])
  const [topic, setTopic] = useState('home')

  const changeTopic = (topic) => {
    setTopic(topic)
  }

  useEffect(() => {
    getArticlesByTopic(topic).then(data => setArticles(addId(data.results)))
  }, [topic])

  return (
    <div className="App">
      <h1>NYTimes Reader</h1>
      <Switch>
        <Route 
          exact path="/"
          render={() => (
            <>
              <TopicSelector changeTopic={changeTopic} key={uuidv4()}/>
              <CardsContainer articles={articles} key={uuidv4()}/>
            </>
          )}
        />

        <Route 
          exact path="/:id"
          render={({ match }) => {
            const story = articles.find(
              article => article.id === match.params.id
            );
            return <ArticleDetails details={story} articles={articles} key={uuidv4()}/>
          }}
        />

      </Switch>
      
    </div>
  );
}

export default App;