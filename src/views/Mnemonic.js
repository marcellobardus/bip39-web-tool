import React, { useState } from "react";

import { Container, Button, Modal } from "rsuite";

import * as bip39 from "bip39";

import { hdkey } from "ethereumjs-wallet";

export default function Mnemonic() {
  const [showModal, setShowModal] = useState(false);
  const [secrets, setSecrets] = useState({});

  const handleClick = () => {
    const mnemonic = bip39.generateMnemonic();

    bip39.mnemonicToSeed(mnemonic).then((seed) => {
      const xpub = hdkey
        .fromMasterSeed(seed)
        .publicExtendedKey()
        .toString("utf8");
      const xpriv = hdkey
        .fromMasterSeed(seed)
        .privateExtendedKey()
        .toString("utf8");

      setSecrets({ xpub, xpriv, mnemonic });
      setShowModal(true);
    });
  };

  return (
    <Container>
      <Button color="blue" onClick={handleClick}>
        Generate
      </Button>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header>Your Mnemonic</Modal.Header>
        <Modal.Body>
          <p>{"Mnemonic: " + secrets.mnemonic}</p>
          <p>{"Xpriv: " + secrets.xpriv}</p>
          <p>{"Xpub: " + secrets.xpub}</p>
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
