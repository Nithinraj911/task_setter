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


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import TabCard from '../components/TabCard.jsx';
import { createData } from '../api/commonAPI';
import { useEffect } from 'react';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //const {user,token} = location.state;
  const [notes ,setNotes] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  //console.log(JSON.stringify(user)+","+"token :"+token);

  useEffect(() =>{

    console.log(location);

    const getTodoList = async () => {
      try{
        const res = await createData("/api/getTodoList",{});
        if(res){
          setNotes(res.data);

          console.log(JSON.stringify(res.data) + " " + "res.data");
  
        }
    
        
  
      }catch(error){
        console.log("data not resived"+ ","+ error);
  
      }
      
    }
    
    getTodoList();
    console.log(notes + " " +" inSide useEffect to check notes");
   
    
  },[]);
  
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
      


<div className="container d-flex flex-wrap gap-4 pt-5" style={{marginTop : "60px"}}>

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
  <button
    type="button"
    className={`btn  d-flex align-items-center ${
      isHovered ? 'rounded-pill' : 'rounded-circle'
    } px-3 py-2`}
    style={{ backgroundColor:  "#3A59D1", transition: 'all 1.4s ease-in-out' }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={(e) => navigate("/notecreater")}
  >
    <span className="fw-bold fs-4"style={{ color:  "#FFFFFF", transition: 'all 1.4s ease-in-out' }}>+</span>
    {isHovered && <span className="ms-2"style={{ color:  "#FFFFFF", transition: 'all 1.4s ease-in-out' }}>Add Item</span>}
  </button>
</div>
          
         
      
      
    </div>
  );
};

export default HomePage;
