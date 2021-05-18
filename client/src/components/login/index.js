import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Register } from ".."
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../actions"
import { useHistory } from 'react-router-dom'

function Login({ handleUsernameEntry, handlePasswordEntry }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(userLogin(username, password));
    if (res) {
      history.push("/profile");
    }
  };

  // const handleUsernameEntry = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handleEmailEntry = (e) => {
  //   setEmail(e.target.value)
  // }
  // const handlePasswordEntry = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <>
      <div>
        <Form >
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter username"
              onChange={handleUsernameEntry}
              value={username}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={handlePasswordEntry}
              value={password}
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
      <Register show={show} handleClose={handleClose} />
    </>
  );
}
export default Login;
