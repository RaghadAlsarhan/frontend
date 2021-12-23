import React from "react";
import { ListGroup, InputGroup, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export default function Appointment() {
  return (
    <div>
      <>
      <h5></h5>
        <InputGroup>
          <InputGroup.Radio aria-label="Radio button for following text input" />
          <FormControl aria-label="Text input with radio button" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Radio aria-label="Radio button for following text input" />
          <FormControl aria-label="Text input with radio button" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Radio aria-label="Radio button for following text input" />
          <FormControl aria-label="Text input with radio button" />
        </InputGroup>
      </>
    </div>
  );
}