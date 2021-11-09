import React, { useEffect, useState} from 'react'

import '../../styles/App.css';
import { getHomeArticles } from '../../utils'

function App() {

  useEffect(() => {
    getHomeArticles().then(data => console.log("Data: ", data.results))
  }, [])

  return (
    <div className="App">
      NYTimes Reader
    </div>
  );
}

export default App;