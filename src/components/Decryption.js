import React, { useState } from "react";

import PropTypes from "prop-types";

import { Modal, Button, Alert } from "rsuite";

export default function Decryption(props) {
  const [showModal, setShowModal] = useState(false);
  const [decipheredMessage, setDecipheredMessage] = useState("");

  const triggerFunction = props.triggerFunction;

  return (
    <div>
      <Button
        style={{ marginTop: "20px" }}
        color="blue"
        onClick={() => {
          const message = triggerFunction();

          if (message instanceof Promise) {
            message
              .then((m) => {
                setDecipheredMessage(m);
                setShowModal(true);
                if (!m.length) {
                  Alert.error("Decryption failed");
                }
              })
              .catch((e) => {
                Alert.error("Something went wrong");
              });
          } else {
            setDecipheredMessage(message);
            setShowModal(true);
            if (!message.length) {
              Alert.error("Decryption failed");
            }
          }
        }}
      >
        Decipher
      </Button>

      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Deciphered message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{decipheredMessage}</p>
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

Decryption.propTypes = {
  triggerFunction: PropTypes.func,
};
