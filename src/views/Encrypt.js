import React, { useState } from "react";

import { Container, Form, FormGroup, ControlLabel, FormControl } from "rsuite";
import Encryption from "../components/Encryption";

import { encryptWithPublicKey } from "eth-crypto";

export default function Encrypt() {
  const [pubKey, setPubKey] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container>
      <Form fluid style={{ margin: "5%" }}>
        <FormGroup>
          <ControlLabel>PubKey</ControlLabel>
          <FormControl
            rows={5}
            name="pubkey"
            componentClass="textarea"
            onChange={setPubKey}
          />

          <FormGroup>
            <ControlLabel>Message</ControlLabel>
            <FormControl
              rows={5}
              name="message"
              componentClass="textarea"
              onChange={setMessage}
            />
          </FormGroup>
        </FormGroup>
      </Form>
      <Encryption
        encyptionType="ecdsa"
        triggerFunction={() => {
          return encryptWithPublicKey(pubKey, message).then((sec) =>
            btoa(JSON.stringify(sec))
          );
        }}
      />
    </Container>
  );
}
