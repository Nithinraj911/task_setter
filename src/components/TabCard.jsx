import React from 'react'

const TabCard = ({title,subject,matter}) => {
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{subject}</p>
      <a href="#" className="btn btn-primary">open</a>
    </div>
  </div>
  )
}

export default TabCard
