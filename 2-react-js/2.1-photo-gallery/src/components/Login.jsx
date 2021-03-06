import React, { useRef } from "react";
import { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth, currentUser } from "../contexts/AuthContext";
import { of } from "await-of";
import { Link, useHistory } from "react-router-dom";
import routePaths from "./routerPaths";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    const [loginResult, loginResultError] = await of(
      login(emailRef.current.value, passwordRef.current.value)
    );
    setLoading(false);
    if (loginResultError) return setError(loginResultError.message);
    // console.log(loginResult);

    setError("");
    history.push(routePaths.gallery);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log in</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Login
            </Button>
            <div className="w-100 text-center mt-2">
              Forget password?{" "}
              <Link to={routePaths.resetPassword}>reset password</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to={routePaths.signup}>signup</Link>
      </div>
    </div>
  );
}
