import React, { useEffect, useState} from 'react'

import '../../styles/App.css';
import { getHomeArticles } from '../../utils'

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getHomeArticles().then(data => setArticles(data.results))
  }, [])

  return (
    <div className="App">
      NYTimes Reader
    </div>
  );
}

export default App;