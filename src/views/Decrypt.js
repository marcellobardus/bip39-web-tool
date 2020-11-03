import React, { useState } from "react";

import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Container,
  InputNumber,
} from "rsuite";

export default function Decrypt() {
  const [xpriv, setXpriv] = useState("");
  const [keyId, setKeyId] = useState(0);
  const [cipheredText, setCipheredText] = useState("");

  return (
    <Container>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Xpriv</ControlLabel>
          <FormControl rows={5} name="xpriv" componentClass="textarea" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Key Id</ControlLabel>
          <InputNumber />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Ciphered text</ControlLabel>
          <FormControl
            rows={5}
            name="ciphered text"
            componentClass="textarea"
          />
        </FormGroup>
      </Form>
    </Container>
  );
}
