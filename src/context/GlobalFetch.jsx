import React,{children, createContext,useState,} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { createData } from '../api/commonAPI';


export const GlobalFetch = createContext ();

export const GlobalFetchProvider = ({children}) =>{

    const location = useLocation();
    const navigate = useNavigate();
      //const {user,token} = location.state;
    const [notes ,setNotes] = useState([]);//first save the res on this state
    const [todoOrNot, setTodoOrNot] = useState(true);//represents ToDo data or note
      
     // get the ToDo List Fun
  const getTodoList = async () => {
    console.log("the getTodoList function called");
    try{
      const res = await createData("/api/todo/getTodoList",{});
      if(res){
        setNotes(res.data);

        console.log(JSON.stringify(res.data) + " " + "res.data");

        if (location.pathname !== "/home") navigate("/home");//checking the path for chaange the path
        

        if(!todoOrNot)setTodoOrNot(true);
        

      }
  
    }catch(error){
      console.log("data not resived"+ ","+ error);

    }
    
  }


  // get the ToDo List Fun
  const getRoughNoteList = async () => {
    try{
      const res = await createData("/api/roughNote/getTodoList",{});
      if(res){
        setNotes(res.data);

        console.log(JSON.stringify(res.data) + " " + "Rough Note From res.data");

        if (location.pathname !== "/home") navigate("/home");//checking the path for change the path


        if(todoOrNot)setTodoOrNot(false);// to know it's note or todo

      }
  
    }catch(error){
      console.log("data not resived"+ ","+ error);

    }
    
  }





    return(
             <GlobalFetch.Provider value={{notes,todoOrNot,getTodoList,getRoughNoteList}}>
                {children}
             </GlobalFetch.Provider>
    )
}