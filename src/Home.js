import React, { useState } from "react";
import {Button} from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Login = () => {
    const [show, setShow]=useState(false);
    const [password, setPassword]=useState("");
    const [user, setUser]=useState("");
    const [data, setData]=useState("");
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const handleSubmit=event=>{
        event.preventDefault();
        const arr1={user:user, password:password}

        setData([...data, arr1])
        console.log(data);
    }
    return (
        <div className="login">
             <Button variant="primary" onClick={()=>handleShow(true)}>
        Log in here
      </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
           </Modal.Header>
           <Modal.Body>
            <form className="login_form" onSubmit={handleSubmit}></form>
            <h1>login here</h1>
            username :
            <input type="text" placeholder="enter username here" value={user} name="user" onChange={e=>setUser(e.target.value)}/>
            <br/>
            password :
            <input type="text" placeholder="enter password here" value={password} name="password" onChange={e=>setPassword(e.target.value)}/>
            <div>
                <input type="submit" value="submit"/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
        </div>
    )
}
