import API from "./API";


//COMMON CRUD

//GET
export const getData = (url , params = { }) => {
    console.log("function geting data.......");
    return API.get(url,{params});
};

//POST
export const createData = (url,data) => {
    console.log("function create Data.......")
    return API.post(url,data);
};

//PUT
export const updateData = (url,data) => {
    console.log("function updating data......");
    
    
    return API.put(url,data);
};

//DELETE
export const deleteData = (url) => {
    console.log("fuction start deleting data........");
    
    return API.delete(url);
};

