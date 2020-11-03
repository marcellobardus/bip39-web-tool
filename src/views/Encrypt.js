import React, { useState } from "react";

import {
  Container,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  InputNumber,
} from "rsuite";
import Encryption from "../components/Encryption";

import { hdkey } from "ethereumjs-wallet";

import { encryptWithPublicKey } from "eth-crypto";

export default function Encrypt() {
  const [xpub, setXpub] = useState("");
  const [keyId, setKeyId] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <Container>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Xpub</ControlLabel>
          <FormControl
            rows={5}
            name="xpub"
            componentClass="textarea"
            onChange={setXpub}
          />
          <FormGroup>
            <ControlLabel>Key Id</ControlLabel>
            <InputNumber onChange={setKeyId} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Message</ControlLabel>
            <FormControl
              rows={5}
              name="ciphered text"
              componentClass="textarea"
              onChange={setMessage}
            />
          </FormGroup>
        </FormGroup>
      </Form>
      <Encryption
        triggerFunction={() => {
          const master = hdkey.fromExtendedKey(xpub);
          const pub = master
            .deriveChild(keyId)
            .getWallet()
            .getPublicKey()
            .toString("hex");

          return encryptWithPublicKey(pub, message).then((sec) =>
            btoa(JSON.stringify(sec))
          );
        }}
      />
    </Container>
  );
}
