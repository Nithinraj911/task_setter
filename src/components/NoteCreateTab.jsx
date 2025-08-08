import React from 'react'

const NoteCreateTab = () => {
  const todos = [
    { id: 1, task: "Buy groceries", done: false },
    { id: 2, task: "Finish project", done: true },
    { id: 3, task: "Read a book", done: false },
  ];
  return (

    <div
  className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
  style={{ zIndex: 1050, backgroundColor: "rgba(0,0,0,0.5)" }}
>
  <div className="d-flex w-75 bg-white rounded overflow-hidden" style={{ height: "80%" }}>
    {/* Left Panel */}
    <div className="h-100 p-4 flex-grow-1">
      <div className="d-flex align-items-center mb-3">
        <h3 className="fs-3 fw-bolder">Lorem ipsum</h3>
        <h3 className="ms-5 fw-bold">Register</h3>
      </div>
      
    </div>

    {/* Right Panel with Image and Overlay */}
    <div
      className="position-relative overflow-hidden"
      style={{ width: "450px", height: "470px" }}
    >
      <img
        className="w-100 h-100 object-fit-cover"
        
        alt="Couple"
      />

      {/* Overlay Text Box */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-start"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="p-4 text-white">
          <h2 className="fs-2 fw-bold mb-3">Your Title Here</h2>
          <p className="fs-5">Your dialogue content goes here.</p>
        </div>
      </div>

      {/* Close Button */}
      <div className="position-absolute top-0 end-0 m-2" style={{ cursor: "pointer" }}>
        <img
          style={{ width: "20px", height: "20px" }}
         
          src=""
          alt="Close"
        />
      </div>
    </div>
  </div>
</div>


/////////////////////////////////////////////////////////////////////////////////////////////    
    // <div className="container py-4 h-100">
    //   <div className="my-3 mx-5 h-100 bg-secondary">
    //   <div className="p-5 mx-5 h-100 bg-danger">
    //   <h1 className='text-centre'>Welcome back</h1>
    //   </div>
    //   </div>
//////////////////////////////////////////////////////////////////////////////////////////////////
    
    /* Profile Section */
    /* <div className="bg-primary text-white p-4 rounded mb-4">
      <h2>Welcome, Manu</h2>
      <p>Email: manu@example.com</p>
    </div>

    /* Todo List */
   /* <div className="card shadow">
      <div className="card-header bg-dark text-white">
        <h4 className="mb-0">My To-Do List</h4>
      </div>
      <ul className="list-group list-group-flush">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.done ? "text-muted text-decoration-line-through" : ""
            }`}
          >
            {todo.task}
            <span className={`badge bg-${todo.done ? "success" : "warning"}`}>
              {todo.done ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div> */
  
);
  
}

export default NoteCreateTab
