import React ,{createContext,useState,useEffect} from "react";


export const  GlobalContext = createContext();

export const GlobalProvider = ({children}) =>{
     const[userName,setUserName] = useState({
        userName:"",
        profilePic:"",
    
    });

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUserName({
            userName: `${user.firstname} ${user.lastname}`,
            profilePic: user.profilePic || "",
          });
        }},[]);

     return(
        <GlobalContext.Provider value={{userName,setUserName}}>
            {children}
        </GlobalContext.Provider>
     )
};