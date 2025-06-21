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
import { useLocation } from 'react-router-dom';
import Header from '../components/Header.jsx';
import TabCard from '../components/TabCard.jsx';

const HomePage = () => {
  const location = useLocation();
  const {user,token} = location.state;
  
  
  const notes = [
    {
      title: "Meeting Summary",
      subject: "Team Sync",
      matter: "Discussed project milestones, upcoming deadlines, and blockers. Assigned new tasks to team members."
    },
    {
      title: "Lecture Notes",
      subject: "Physics - Quantum Mechanics",
      matter: "Covered concepts of wave-particle duality, Heisenberg uncertainty principle, and Schrödinger equation."
    },
    {
      title: "Shopping List",
      subject: "Groceries",
      matter: "Milk, eggs, bread, bananas, coffee, rice, and cleaning supplies."
    },
    {
      title: "Project Plan",
      subject: "Web App Development",
      matter: "Define MVP features, set up project repo, assign frontend/backend roles, and schedule sprints."
    },
    {
      title: "Event Reminder",
      subject: "Mom's Birthday",
      matter: "Plan a surprise party, order cake, buy gift, and invite family for dinner on the 18th."
    }
  ];

  const [cardData, setCardData] = useState(notes);

  return (
    <div className='container-flud bg-succes vh-100'>
      <div className='m-4'>
      <Header
      userName={`${user.firstname} ${user.lastname}`}/>
      </div>
      


<div className="container d-flex">

{cardData.map((data,index)=>(
           <TabCard
           key={index}
           title={data.title}
           subject={data.subject}
           matter={data.matter}
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

        
          
         
      
      
    </div>
  );
};

export default HomePage;
