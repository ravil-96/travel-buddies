import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RegisterModal } from ".."
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../actions"
import { useHistory } from 'react-router-dom'

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

  const history = useHistory()

const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(userLogin(username, password))
    if (res) {
      history.push("/profile");
    }
}

const handleUsernameEntry = (e) => {
  setUsername(e.target.value)
}

const handlePasswordEntry = (e) => {
  setPassword(e.target.value);
};

  return (
    <>
    <div role="Login form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter username"
            onChange={handleUsernameEntry}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={handlePasswordEntry}
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button onClick={handleShow} variant="dark">
          Create New Account
        </Button>
      </Form>
    </div>
    <RegisterModal show={show} handleClose={handleClose} />
    </>
  );
}
export default Login;
