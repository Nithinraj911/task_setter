import React from 'react'

const Header = ({userName,profilePic}) => {
  return (
    //third__try---------------------------------------------------------------------------------
    <div className="container-fluid p-0">
  <div className="navbar row align-items-center mx-0 position-fixed top-0 w-100 " style={{ backgroundColor:  "#3A59D1",zIndex: "1000"  // Ensures navbar doesn't overflow screen
 }}>
    
    {/* Company Name Section */}
    <div className="col-md-3 text-white fw-bold fs-4">
      <h3 className="brand-name mx-3 fs-2 fw-bold">my__task</h3>
    </div>

    {/* Empty Column for Spacing */}
    <div className="col-md-4"></div>

    {/* Profile Section */}
    <div className="col-md-5 text-white">
      {/* <div className="row">
        <div className="col-md-5 d-flex">
          <h6 className='col-md-9'>Profile Name</h6>
          <img className=' col-md-2 rounded-5' style={{width:"45px" , height:"30px"}} src="src/assets/try 02 (1 of 1).jpg" alt="profile_pic" />
        </div>
        <div className="col-md-3">
          <h6>Staff/Admin</h6>
        </div>
        <div className="col-md-4 d-flex p-0">
          <h6>About</h6>
          <h6 className="ms-2">Settings</h6>
        </div>
      </div> */}
      {/* <div className='d-flex justify-content-between'>
        <div className='d-flex justify-content-between'>
        <h6 className='col-md-9'>Profile Name</h6>
          <img className=' col-md-2 rounded-5' style={{width:"45px" , height:"30px"}} src="src/assets/try 02 (1 of 1).jpg" alt="profile_pic" />
        
        </div>
        <div className='d-flex justify-content-arounds'>
        <h6>Staff/Admin</h6>
        <h6>About</h6>
        <h6>Settings</h6>

        </div>

      </div> */}
      <div className="d-flex justify-content-around align-items-center flex-wrap">
    {/* Profile Name and Image */}
    <div className="d-flex align-items-center">
      <h6 className="me-2">{userName}</h6>
      <img 
        className="rounded-circle px-2" 
        style={{ width: "50px", height: "35px" , objectFit: "cover" }} 
        src={profilePic} 
        alt="profile_pic" 
      />
    </div>

    {/* Staff/Admin, About, and Settings */}
    <div className="d-flex gap-3 flex-wrap">
      <h6>Task Note</h6>
      <h6>Roughf Note</h6>
      <h6>About</h6>
    </div>
  </div>

    </div>
  </div>
</div>
  )
}

export default Header
