import React, { useState } from "react";

import { Container, Form, FormControl, FormGroup, ControlLabel } from "rsuite";
import Decryption from "../components/Decryption";

import { AES, enc } from "crypto-js";

export default function AesDecrypt() {
  const [cipheredMessage, setCipheredMessage] = useState("");
  const [decryptionKey, setDecryptionKey] = useState("");

  return (
    <Container>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Ciphered message</ControlLabel>
          <FormControl
            onChange={setCipheredMessage}
            rows={5}
            name="ciphered message"
            componentClass="textarea"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Decryption key</ControlLabel>
          <FormControl
            name="Decryption key"
            type="text"
            onChange={setDecryptionKey}
          />
        </FormGroup>
      </Form>
      <Decryption
        triggerFunction={() => {
          const deciphered = AES.decrypt(
            cipheredMessage,
            decryptionKey
          ).toString(enc.Utf8);

          return deciphered;
        }}
      />
    </Container>
  );
}
