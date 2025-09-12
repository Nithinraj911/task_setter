// import React, { useState } from 'react'
// import Header from '../components/Header.jsx'
// import RegistrationPage from './RegistrationPage.jsx'
// import TabCard from '../components/TabCard.jsx';

// const HomePage = () => {

  
//   const notes = [
//     {
//       title: "Meeting Summary",
//       subject: "Team Sync",
//       matter: "Discussed project milestones, upcoming deadlines, and blockers. Assigned new tasks to team members."
//     },
//     {
//       title: "Lecture Notes",
//       subject: "Physics - Quantum Mechanics",
//       matter: "Covered concepts of wave-particle duality, Heisenberg uncertainty principle, and Schrödinger equation."
//     },
//     {
//       title: "Shopping List",
//       subject: "Groceries",
//       matter: "Milk, eggs, bread, bananas, coffee, rice, and cleaning supplies."
//     },
//     {
//       title: "Project Plan",
//       subject: "Web App Development",
//       matter: "Define MVP features, set up project repo, assign frontend/backend roles, and schedule sprints."
//     },
//     {
//       title: "Event Reminder",
//       subject: "Mom's Birthday",
//       matter: "Plan a surprise party, order cake, buy gift, and invite family for dinner on the 18th."
//     }
//   ];
//   const [cardData , setCardData] = useState(notes);
  
//   return (
//     <div>
//       {/* <Header/> */}
//       <div classNameName="row g-4 ms-3 ms-sm-0">
//         {cardData.map((data,index) => (
//           <TabCard
//           key={index}
//           title={data.title}
//           subject={data.subject}
//           matter={data.matter}
//           />
//         ) )

//         } 

//       </div>
     
      
//     </div>

//   )
// }

// export default HomePage


import React, { useState,useEffect,useContext } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import TabCard from '../components/TabCard.jsx';
//import { createData } from '../api/commonAPI';
import { Link } from 'react-router-dom';
import { GlobalFetch } from '../context/GlobalFetch';


const HomePage = () => {
  
  const [cardData, setCardData] = useState([]);//created as a prop to pass res from get
  const [isHovered, setIsHovered] = useState(false);//Hovering css contol
  //console.log(JSON.stringify(user)+","+"token :"+token);
     const apiFuncCaller = useContext(GlobalFetch);

     const {notes,todoOrNot,getTodoList,getRoughNoteList} = apiFuncCaller;

   
  //get the todo data when start
  useEffect(() =>{

    console.log(location);

    
    
    getTodoList();
    console.log(notes + " " +" inSide useEffect to check notes");
    
  },[]);


  //set the note data for the map
  useEffect(() => {
    setCardData(notes);
    console.log(JSON.stringify(cardData) + " " +" inSide useEffect to check notes");

  }, [notes]);

  
 


 

  return (
    <div className='container-flud bg-succes vh-100'>
     {/* <div className='m-4'>
      <Header
      userName={`${user.firstname} ${user.lastname}`}/>
      </div>*/}
      <Header />
     <div className='mt-5 ps-5 pt-4'>
     <h1>{todoOrNot ? "Todo List" : "Rough Note"}</h1>
     </div> 



<div className="container d-flex flex-wrap gap-4 " style={{marginTop : "40px"}}>


{cardData.map((data,index)=>(
           <TabCard
           key={index}
           data={data}
           
         />
        ))}
  
</div>

{/* <div className='container'> */}
        {/* <div className="card text-center" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title">gfchgcj </h5>
            <p className="card-text">jhgcfhgfch</p>
            <a href="#" className="btn btn-primary">open</a>
          </div>
        </div>

        </div> */}
      {/* <Header />
      
        <div className='container-flud vh-100'>
        <div className="card text-center" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title">gfchgcj </h5>
            <p className="card-text">jhgcfhgfch</p>
            <a href="#" className="btn btn-primary">open</a>
          </div>
        </div>

        </div> */}

<div
  className="position-fixed bottom-0 end-0 m-4"
  style={{ zIndex: 1030 }}
>
<Link to="/notecreater"> <button
    type="button"
    className={`btn  d-flex align-items-center ${
      isHovered ? 'rounded-pill' : 'rounded-circle'
    } px-3 py-2`}
    style={{ backgroundColor:  "#3A59D1", transition: 'all 0.6s ease-in-out'}}
    onMouseEnter={(e) => {setIsHovered(true)
      e.target.style.width = "120px";
    e.target.style.height = "50px";
    }}
    onMouseLeave={(e) => {setIsHovered(false)
      e.target.style.width = "50px";
    e.target.style.height = "50px";
     e.target.style.borderRadius= "50%"}
    }
    //onClick={(e) => navigate("/notecreater")}
  >
    <span className="fw-bold fs-4"style={{ color:  "#FFFFFF", transition: 'all 0.6s ease-in-out' }}>+</span>
    {isHovered && <span className="ms-2"style={{ color:  "#FFFFFF", transition: 'all 0.6s ease-in-out' }}>Add Item</span>}
  </button>
  </Link>
</div>
          
         
      
      
    </div>
  );
};

export default HomePage;
