import React from 'react'
import moment from 'moment'
// TO SHOW THE TIME WE USE A LIBRARY CALLED moment - npm install moment

function Time({time}) {
    const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")
  return (
    <div>
        <span className='absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-sm'>{videoTime}</span>
    </div>
  )
}

export default Time