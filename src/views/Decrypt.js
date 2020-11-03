import React, { useState } from "react";

import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Container,
  InputNumber,
} from "rsuite";
import Decryption from "../components/Decryption";

import { hdkey } from "ethereumjs-wallet";

import { decryptWithPrivateKey, publicKeyByPrivateKey } from "eth-crypto";

export default function Decrypt() {
  const [xpriv, setXpriv] = useState("");
  const [keyId, setKeyId] = useState(0);
  const [cipheredText, setCipheredText] = useState("");

  return (
    <Container>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Xpriv</ControlLabel>
          <FormControl
            rows={5}
            name="xpriv"
            componentClass="textarea"
            onChange={setXpriv}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Key Id</ControlLabel>
          <InputNumber onChange={setKeyId} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Ciphered text</ControlLabel>
          <FormControl
            rows={5}
            name="ciphered text"
            componentClass="textarea"
            onChange={setCipheredText}
          />
        </FormGroup>
      </Form>
      <Decryption
        triggerFunction={() => {
          const master = hdkey.fromExtendedKey(xpriv);
          const privKey =
            "0x" +
            master
              .deriveChild(keyId)
              .getWallet()
              .getPrivateKey()
              .toString("hex");

          const pub = publicKeyByPrivateKey(privKey);

          console.log(pub);

          const decoded = JSON.parse(atob(cipheredText));
          return decryptWithPrivateKey(privKey, decoded);
        }}
      />
    </Container>
  );
}
