import React, { useState} from 'react'
import '../../styles/TopicSelector.css'
import topicsData from '../../topicData'

function TopicSelector({ changeTopic }) {
  const [topicValue, setTopicValue] = useState('home')

  const handleClick = (e) => {
    e.preventDefault()
    changeTopic(topicValue)
  }

  return (
    <div className='slectorBox--container'>
      <select value={topicValue} onChange={(e) => setTopicValue(e.target.value)}>
        {
          topicsData.map(topic => {
            return (
              <option value={topic}>{topic}</option>
            )
          })
        }
      </select>
      <button onClick={(e) => handleClick(e)}>Select Topic</button>
    </div>
  )
}

export default TopicSelector