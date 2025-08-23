import React, { useState,useEffect } from 'react';
import Header from './Header';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { createData } from '../api/commonAPI';

const ShowTab = () => {
    const location = useLocation();
    const [addNote ,setAddNote] = useState(false);
    const [showSuccessMessage ,setShowSuccessMessage] = useState(false);
    //const showAddButton = !addNote && (note.title || note.subject || note.matter);


    const [note, setNote] = useState({
        title: '',
        subject: '',
        matter: ''
      });
    
     // const showAddButton = !addNote && (note.title || note.subject || note.matter);

    useEffect(()=>{
      const state = location?.state?.data;
      console.log("showTab state"+" "+JSON.stringify(state) );


        
        if(state){
            
            console.log("showTab state"+" "+JSON.stringify(state) );
            setAddNote(true);
            setNote({
                title:state.title,
                subject:state.subject,
                matter: state.matter,
            });

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

      const handleOnSubmit = async (e) =>{
        console.log(JSON.stringify(note));
        try {
        
          const res = await createData("api/createTodoList" , note);
          if (res.status === 200 || res.status === 201) {
            setShowSuccessMessage(true);
      
            // Hide after 2.5 seconds
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 2500);
          }
          
        } catch (error) { 
        
          return res.status(404).JSON({msg:"the data is not created"});
           
        }
      }

  return (
    <div>
        <Header />
        <Container className="" style={{ marginTop: "70px" }}>
    <h2 className="mb-4">To-Do Notes</h2>
    
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
                        <Button variant="primary" type="submit">
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
