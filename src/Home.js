import React, { useState } from "react";
import {Button} from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { showModel, showUser } from "./action";
import { useSelector,useDispatch } from "react-redux"; 


export const Login = () => {
    //const [show, setShow]=useState(false);
    const show=useSelector((state)=>state.modelShow.show) 
    const userShow=useSelector((state)=>state.userDetail.result)
    console.log(userShow)

    const dispatch=useDispatch();

    const handleClose = () => {
        dispatch(showModel(false));
    }
    const handleShow = () => {
        dispatch(showModel(true));
    }

    const[data, setData]=useState({
        username: "",
        password: ""
    })

    const{username,password}=data

    const onChange =(event)=>{
       setData({...data, [event.target.name]: event.target.value})
    }
    
    const handleSubmit=event=>{
        event.preventDefault();
        dispatch(showModel(false))
        console.log(data);
    }
    return (
        <div className="login">
             <Button variant="primary" onClick={handleShow}>
        Log in here
      </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
           </Modal.Header>
           <Modal.Body>
            <form  onSubmit={handleSubmit}></form>
            <h1>login here</h1>
            username :
            <input type="text" placeholder="enter username here"  name="user" onChange={onChange}/>
            <br/>
            password :
            <input type="password" placeholder="enter password here" name="password" onChange={onChange}/>
            <div>
                <input type="submit" onSubmit={handleSubmit} />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            
        </Modal.Footer>
        </Modal>
        </div>
    )
}
