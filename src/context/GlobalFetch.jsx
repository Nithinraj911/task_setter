import React,{createContext,useState,} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { createData,deleteData} from '../api/commonAPI';


export const GlobalFetch = createContext ();

export const GlobalFetchProvider = ({ children }) =>{

    const location = useLocation();
    const navigate = useNavigate();
      //const {user,token} = location.state;
    const [notes ,setNotes] = useState([]);//first save the res on this state
    const [todoOrNot, setTodoOrNot] = useState(true);//represents ToDo data or note
        const [showSuccessMessage ,setShowSuccessMessage] = useState(false);
    
      
     // get the ToDo List Fun
  const getTodoList = async () => {
    console.log("the getTodoList function called");
    try{
      const res = await createData("/api/todo/getTodoList",{});
      if(res){
        console.log("inside getTodoList  todoOrNot value have to be before setTodoOrNot " + " " + todoOrNot );
        const updatedFlag = true;
        setTodoOrNot(updatedFlag); 
        

        console.log("inside getTodoList todoOrNot value have to be after setTodoOrNot " + " " + todoOrNot );

        setNotes(res.data);

        console.log(JSON.stringify(res.data) + " " + "res.data");
        localStorage.setItem('todoOrNot', updatedFlag);
        console.log("inside getTodoList todoOrNot value have to be true " + "" + todoOrNot );


        if (location.pathname !== "/home") navigate("/home");//checking the path for chaange the path
        

       
        

      }
  
    }catch(error){
      console.log("data not resived"+ ","+ error);

    }
    
  }


  // get the ToDo List Fun
  const getRoughNoteList = async () => {
    try{
      const res = await createData("/api/note/getNoteList",{});
      if(res){
        console.log("inside getRoughNoteList todoOrNot value have to be before setTodoOrNot " + " " + todoOrNot );
        const updatedFlag = false; 
        setTodoOrNot(updatedFlag); 

        

        console.log("inside getRoughNoteList todoOrNot value have to be after setTodoOrNot " + " " + todoOrNot );


        setNotes(res.data);

        console.log(JSON.stringify(res.data) + " " + "Rough Note From res.data");
        localStorage.setItem('todoOrNot', updatedFlag);
        console.log("inside  getRoughNoteList todoOrNot value have to be false " + "" + todoOrNot );

        if (location.pathname !== "/home") navigate("/home");//checking the path for change the path



      }
  
    }catch(error){
      console.log("data not resived"+ ","+ error);

    }
    
  }

  //data delete todo & note

  const delTodoOrNote = async (objId) =>{

    console.log(objId);

    try {

       if(todoOrNot){

        const res = await deleteData(`api/todo/delTodoList/${objId}`);
         res && console.log("todo deleted");
        res && getTodoList();
              
        
       }else{
        //space for write the note delete code
        const res = await deleteData(`api/note/delNoteList/${objId}`);
         res && console.log("Note deleted");
        res && getRoughNoteList();
       }
      
    } catch (error) {

      console.error("Error deleting todo:", error);
      
    }

  }


  const createTodoList = async (note) =>{
          console.log(JSON.stringify(note));
          try {
          
            const res = await createData("/api/todo/createTodoList" , note);
            if (res.status === 200 || res.status === 201) {
              setShowSuccessMessage(true);
        
              // Hide after 2.5 seconds
              setTimeout(() => {
                setShowSuccessMessage(false);
                navigate("/home");
                
              }, 2500);
            }
            
          } catch (error) { 
          
            return res.status(404).JSON({msg:"the data is not created"});
             
          }
        }



        const createNoteList = async (note) =>{
          console.log(JSON.stringify(note));
          try {
          
            const res = await createData("/api/note/createNoteList" , note);
            if (res.status === 200 || res.status === 201) {
              setShowSuccessMessage(true);
        
              // Hide after 2.5 seconds
              setTimeout(() => {
                setShowSuccessMessage(false);
                navigate("/home")
                
              }, 2500);
            }
            
          } catch (error) { 
          
            return res.status(404).JSON({msg:"the data is not created"});
             
          }
        }





    return(
             <GlobalFetch.Provider value={{notes,setNotes,todoOrNot,setTodoOrNot,showSuccessMessage,getTodoList,getRoughNoteList,delTodoOrNote,createTodoList,createNoteList}}>
                {children}
             </GlobalFetch.Provider>
    )
}