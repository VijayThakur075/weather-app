import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { showModel, showUser, getCity, getWeather } from "./action";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "./action";
import { useHistory } from "react-router";


export const Login = () => {
    //const [show, setShow]=useState(false);
    const showform = useSelector((state) => state.modelShow.show);
    const user = useSelector((state) => state.userDetail.result);
    //const records = useSelector((state) => state.setUsers.data);
    const [inputUser, setInputUser] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();
    const history = useHistory();
    const handleClose = () => dispatch(showModel(false));
    const handleShow = () => dispatch(showModel(true));
    const { username, password } = inputUser;

    const onChange = (event) => {
        setInputUser({ ...inputUser, [event.target.name]: event.target.value })
    }
    console.log()

    useEffect(() => {
        dispatch(userData())
    }, [])

    const loginValidation = (username, password) => {

        if (username === inputUser.username && password === inputUser.password) {
            return (
                history.push("/Dashboard")
            )
        }
        else {
            history.push("/Home")
        }
    }
    return (
        <div className="login">
            <Button variant="primary" onClick={handleShow}>
                Log in
            </Button>

            <Modal show={showform} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onClick={loginValidation}>
                        <h1>login here</h1>
                        username :
                        <input type="text"
                            value={username} name="username"
                            placeholder="enter username here"
                            onChange={onChange} />
                        <br />
                        password :
                        <input type="password"
                            placeholder="enter password here"
                            value={password} name="password"
                            onChange={onChange} />
                        {/* <div>
                          //  <input type="submit" value="submit" />
                        </div> */}
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {user.map((data) => (

                        <Button onClick={() => loginValidation(data.username, data.password)}>
                            login
                        </Button>

                    ))}
                </Modal.Footer>
            </Modal>
        </div>
    )
}
