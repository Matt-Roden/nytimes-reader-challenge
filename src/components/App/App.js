import React, { useEffect, useState} from 'react'
import { Switch, Route} from "react-router-dom";
import '../../styles/App.css';
import { getHomeArticles, getArticlesByTopic, addId } from '../../utils'
import CardsContainer from '../CardsContainer/CardsContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

function App() {
  const [articles, setArticles] = useState([])

  

  // const onTopicSearch = (topic) => {
  //   getArticlesByTopic(topic).then(data => setArticles(data.results))
  //   // This will need to get passed down to the topic selector component
  //   // the value of the selected topic will be passed back up and strung through as arg
  // }

  useEffect(() => {
    // getHomeArticles().then(data => console.log("Data: ", data))
    getHomeArticles().then(data => setArticles(addId(data.results)))
  }, [])

  return (
    <div className="App">
      <h1>NYTimes Reader</h1>
      <Switch>
        <Route 
          exact path="/"
          render={() => (
            <CardsContainer articles={articles}/>
          )}
        />

        <Route 
          exact path="/:id"
          render={({ match }) => {
            const story = articles.find(
              article => article.id === match.params.id
            );
            return <ArticleDetails details={story} articles={articles}/>
          }}
        />

      </Switch>
      
    </div>
  );
}

export default App;