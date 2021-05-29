import React from 'react'

const Notification = ({ message, color }) => {
    if (message === null) {
      return null
    }

    const style = {color}
  
    return (
      <div className="message" style={style}>
        {message}
      </div>
    )
  }

export default Notification