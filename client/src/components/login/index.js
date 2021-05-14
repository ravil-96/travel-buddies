import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
}

const handleEmailEntry = (e) => {
  console.log(e.target.value);
  setEmail(e.target.value)
}

const handlePasswordEntry = (e) => {
  console.log(e.target.value)
  setPassword(e.target.value);
};

  return (
    <div>
      <h5>Login</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailEntry}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordEntry}
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Login;
