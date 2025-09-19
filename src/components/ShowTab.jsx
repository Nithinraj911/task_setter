import React, { useState,useEffect,useContext } from 'react';
import Header from './Header';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { createData, updateData } from '../api/commonAPI';
import { GlobalFetch } from '../context/GlobalFetch';

const ShowTab = () => {
    const location = useLocation();
    const [addNote ,setAddNote] = useState(false);
    const apiFuncCaller = useContext(GlobalFetch);
    const {todoOrNot,setTodoOrNot,showSuccessMessage,delTodoOrNote,createTodoList,createNoteList} = apiFuncCaller;
    //const showAddButton = !addNote && (note.title || note.subject || note.matter);
    const state = location?.state?.data;


    const [note, setNote] = useState({
        title: '',
        subject: '',
        matter: ''
      });

//check the refreshing of the page
      const isPageRefreshed = () => {
        const navEntries = performance.getEntriesByType("navigation");
        return navEntries.length > 0 && navEntries[0].type === "reload";
      };

     
    
     // const showAddButton = !addNote && (note.title || note.subject || note.matter);

     // set data if it redirected through card
    useEffect(()=>{
     
      console.log("showTab state"+" "+JSON.stringify(state) );

      console.log(todoOrNot);


      if (isPageRefreshed()) {
        console.log("localstorage " + " " + localStorage.getItem('todoOrNot') );

        console.log( "todoOrNot value inside " + " " + todoOrNot);

        let store = localStorage.getItem('todoOrNot');
        if(store === 'true') { setTodoOrNot(true) }
        else{ setTodoOrNot(false) }
        
      }
        
        // Your refresh-specific logic here
      
        
        if(state){
            
            console.log("showTab state"+" "+JSON.stringify(state) );
            setAddNote(true);
            if(todoOrNot){
              setNote({
                title:state.title,
                subject:state.subject,
                matter: state.matter,
            });

            }else{

              setNote({
                title:state.title,
                subject:" ",
                matter: state.matter,
            });

            }
            

        }

        console.log("showTab location.state.data"+" "+JSON.stringify(location.state) );
    },[]);

  
      const [notes, setNotes] = useState([]);
    
      const handleChange = (e) => {
        setNote({
          ...note,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!note.title || !note.subject || !note.matter) return;
    
        setNotes([note, ...notes]);
        setNote({ title: '', subject: '', matter: '' });
        
      };
// create TODO note func
      const handleOnSubmit = async (e) =>{
        console.log(JSON.stringify(note));
        if(todoOrNot){
          createTodoList(note);
        }else{
          createNoteList(note);
        }
      }


// update note or todo func

      const editOnChange = async (e) =>{
        e.preventDefault();
        try {

          const res = await (todoOrNot
            ? updateData(`/api/todo/updateTodoList/${state._id}`, note)
            : updateData(`/api/note/updateNoteList/${state._id}`, note));//?todo list update endpoint:note list update endpoint;
        } catch (error) {

          console.log("something went wrong",error);
          
        }
      }

  return (

    <div>
        <Header />
        <Container className="" style={{ marginTop: "70px" }}>
    <h2 className="mb-4">{todoOrNot?"To-Do Notes":"Rough Note"}</h2>
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="noteTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
      </Form.Group>

      {todoOrNot && 

      <Form.Group className="mb-3" controlId="noteSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          name="subject"
          value={note.subject}
          onChange={handleChange}
        />
      </Form.Group>
}

      <Form.Group className="mb-3" controlId="noteMatter">
        <Form.Label>Matter</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter matter"
          name="matter"
          value={note.matter}
          onChange={handleChange}
        />
      </Form.Group>

      {addNote? (
                        <Button variant="primary" type="submit" onClick={editOnChange}>
                            update Note
                        </Button>
                    
        ): (!addNote) && (note.title || note.subject || note.matter) && (
                      
                          <Button variant="primary" type="submit"
                          onClick={ handleOnSubmit}>
                              Add Note
                          </Button>
                      
                      )}
    </Form>

    <hr className="my-5" />

    <Row>
      {notes.map((n, index) => (
        <Col md={6} lg={4} key={index} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{n.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{n.subject}</Card.Subtitle>
              <Card.Text>{n.matter}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
    </div>
  )
}

export default ShowTab
