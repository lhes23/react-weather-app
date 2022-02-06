import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <InputGroup className={styles.inputGroup}>
      <Form onSubmit={props.onSubmitFormHandler} className={styles.inputForm}>
        <div className="d-grid gap-3">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter City"
              onChange={(e) => {
                props.setCity(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </InputGroup>
  );
};

export default Input;
