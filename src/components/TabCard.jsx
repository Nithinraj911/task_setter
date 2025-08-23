import React from 'react'
import { useNavigate } from 'react-router-dom'

const TabCard = ({data}) => {
  const navigate = useNavigate();
  const handleOpen = (e) =>{
    navigate("/notecreater",{state:{data}});
    console.log(JSON.stringify(data)+" "+" tab card func data")
  }
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.subject}</p>
      <button className="btn btn-primary" onClick={handleOpen}>open</button>
    </div>
  </div>
  )
}

export default TabCard
