import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <InputGroup className={styles.inputForm}>
      <Form onSubmit={props.onSubmitFormHandler} className={styles.inputForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter City"
            onChange={(e) => {
              props.setCity(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </InputGroup>
  );
};

export default Input;
