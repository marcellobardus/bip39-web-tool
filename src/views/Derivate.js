import React, { useState } from "react";

import {
  Container,
  Form,
  ControlLabel,
  FormGroup,
  FormControl,
  InputNumber,
  Modal,
  Button,
} from "rsuite";

import { hdkey } from "ethereumjs-wallet";

export default function Derivate() {
  const [extendedKey, setExtendedKey] = useState("");
  const [derivationIndex, setDerivationIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [derivedKey, setDerivedKey] = useState("");

  const derive = () => {
    const keyPrefix = extendedKey.slice(0, 4);

    if (keyPrefix === "xprv") {
      setDerivedKey(
        "0x" +
          hdkey
            .fromExtendedKey(extendedKey)
            .deriveChild(derivationIndex)
            .getWallet()
            .getPrivateKey()
            .toString("hex")
      );
    } else if (keyPrefix === "xpub") {
      setDerivedKey(
        hdkey
          .fromExtendedKey(extendedKey)
          .deriveChild(derivationIndex)
          .getWallet()
          .getPublicKey()
          .toString("hex")
      );
    } else {
      setDerivedKey("");
    }

    setShowModal(true);
  };

  return (
    <Container>
      <Form fluid>
        <FormGroup>
          <ControlLabel>Extended Key</ControlLabel>
          <FormControl
            rows={5}
            name="xpriv"
            componentClass="textarea"
            onChange={setExtendedKey}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Derivation Index</ControlLabel>
          <InputNumber onChange={setDerivationIndex} />
        </FormGroup>
      </Form>
      <Button color="blue" onClick={derive}>
        Derive{" "}
      </Button>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Derived key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{derivedKey}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setShowModal(false);
            }}
            appearance="subtle"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
