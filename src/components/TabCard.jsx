import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalFetch } from '../context/GlobalFetch';
import ShowTab from './ShowTab';

const TabCard = ({data,flag}) => {
  const apiFuncFetch = useContext(GlobalFetch);
  const navigate = useNavigate();

  const {delTodoOrNote,todoOrNot} = apiFuncFetch;
  console.log(JSON.stringify(data)+" "+" tab card func data");

  const handleOpen = (e) =>{
    localStorage.setItem('todoOrNot', todoOrNot);
    navigate("/notecreater",{state:{data}});
    console.log(JSON.stringify(data)+" "+" tab card func data")
  }

  console.log(todoOrNot + "  " +"value of todo or not");


  return (
    <div className="card text-center" style={{ width: "18rem" }}>
    <div className="card-body">
      <h5 className="card-title">{(data.title).slice(0,20)}</h5>
      {flag?      <p className="card-text">{data?.subject?.slice(0, 85) || " "}</p>
                :      <p className="card-text">{data?.matter?.slice(0, 85) || " "}</p>

      }
      <div>
      <button className="btn btn-primary" onClick={handleOpen}>open</button>
      <button className="btn text-white mx-3" onClick={()=>delTodoOrNote(data._id)} style={{backgroundColor:"#FF0505"}}>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default TabCard
