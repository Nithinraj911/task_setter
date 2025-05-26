import API from "./API";


//COMMON CRUD

//GET
export const getData = (url , params = { }) => {
    return API.get(url,{params});
};

//POST
export const createData = (url,data) => {
    return API.post(url,data);
};

//PUT
export const updateData = (url,data) => {
    return API.put(url,data);
};

//DELETE
export const deleteData = (url) => {
    return API.delete(url);
};

