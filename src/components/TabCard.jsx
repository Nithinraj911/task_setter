import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShowTab from './ShowTab';

const TabCard = ({data}) => {
  const navigate = useNavigate();
  console.log(JSON.stringify(data)+" "+" tab card func data");

  const handleOpen = (e) =>{
    navigate("/notecreater",{state:{data}});
    console.log(JSON.stringify(data)+" "+" tab card func data")
  }
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{(data.title).slice(0,20)}</h5>
      <p className="card-text">{(data.subject).slice(0,85)}</p>
      <div>
      <button className="btn btn-primary" onClick={handleOpen}>open</button>
      <button className="btn text-white mx-3" style={{backgroundColor:"#FF0505"}}>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default TabCard
