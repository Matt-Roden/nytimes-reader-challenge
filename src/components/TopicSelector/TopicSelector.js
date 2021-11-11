import React, { useState} from 'react'
import '../../styles/TopicSelector.css'
import topicsData from '../../topicData'

function TopicSelector({ changeTopic }) {
  const [topicValue, setTopicValue] = useState('')

  const handleChange = (e) => {
    setTopicValue(e.target.value);
    changeTopic(topicValue)
  }



  return (
    <div className='slectorBox--container'>
      <select value={topicValue} onChange={(e) => handleChange(e)}>
        {
          topicsData.map(topic => {
            return (
              <option value={topic}>{topic}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default TopicSelector
