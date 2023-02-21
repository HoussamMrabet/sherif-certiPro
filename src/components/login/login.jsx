import React, {useState,useRef} from 'react';
import {Form, Button, Card, Alert} from "react-bootstrap";
import { useAuth } from '../../authContext';
import { useNavigate } from "react-router-dom";

import "./login.scss"

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("");
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError("المعلومات غير صحيحة")
    }

  }

  return (
      <Card className="card-container">
        <Card.Body>
          <h2 className="text-center mb-4">تسجيل الدخول</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>البريد الالكتروني</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>الرمز السري</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-4" type="submit">تسجيل الدخول</Button>
          </Form>
        </Card.Body>
      </Card>
  )
}

export default Login