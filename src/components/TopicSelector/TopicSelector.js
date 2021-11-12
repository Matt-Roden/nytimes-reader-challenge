import React, { useState} from 'react'
import '../../styles/TopicSelector.css'
import topicsData from '../../topicData'
import { v4 as uuidv4 } from 'uuid';

function TopicSelector({ changeTopic }) {
  const [topicValue, setTopicValue] = useState('home')

  const handleClick = (e) => {
    e.preventDefault()
    changeTopic(topicValue)
  }

  return (
    <div className='selectorBox--container'>
      <select className='dropdown--select' value={topicValue} onChange={(e) => setTopicValue(e.target.value)}>
        {
          topicsData.map(topic => {
            return (
              <option value={topic} key={uuidv4()}>{topic}</option>
            )
          })
        }
      </select>
      <button onClick={(e) => handleClick(e)}>Select Topic</button>
    </div>
  )
}

export default TopicSelector