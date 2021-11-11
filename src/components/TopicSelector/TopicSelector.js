import React from 'react'
import '../../styles/TopicSelector.css'
import topicsData from '../../topicData'

function TopicSelector({ changeTopic }) {

  const onTopicChange = () => {

  }



  return (
    <div className='slectorBox--container'>
      <select>
        {
          topicsData.map(topic => {
            return (
              <option>{topic}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default TopicSelector
