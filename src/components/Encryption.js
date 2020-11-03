import React, { useState } from "react";

import PropTypes from "prop-types";

import { Modal, Button, Alert } from "rsuite";

export default function Encryption(props) {
  const [showModal, setShowModal] = useState(false);
  const [cipheredMessage, setCipheredMessage] = useState("");

  const triggerFunction = props.triggerFunction;

  return (
    <div>
      <Button
        color="blue"
        onClick={() => {
          const message = triggerFunction();

          if (message instanceof Promise) {
            message
              .then((m) => {
                setCipheredMessage(m);
                setShowModal(true);
              })
              .catch((e) => {
                Alert.error("Something went wrong");
              });
          } else {
            setCipheredMessage(message);
            setShowModal(true);
          }
        }}
      >
        Cipher
      </Button>

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Encrypted message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{cipheredMessage}</p>
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
    </div>
  );
}

Encryption.propTypes = {
  triggerFunction: PropTypes.func,
};
