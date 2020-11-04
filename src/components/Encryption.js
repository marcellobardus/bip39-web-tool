import React, { useState } from "react";

import PropTypes from "prop-types";

import { Modal, Button, Alert } from "rsuite";
import QrCode from "qrcode.react";

import DownloadPlainText from "./DownloadPlainText";
import DownloadQrCode from "./DownloadQrCode";

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
          <p>
            {cipheredMessage.length > 64
              ? cipheredMessage.slice(0, 6) +
                " ... " +
                cipheredMessage.slice(
                  cipheredMessage.length - 10,
                  cipheredMessage.length
                )
              : cipheredMessage}
          </p>
          <br />
          <QrCode value={cipheredMessage} size={256} id={"cipher-qr-encoded"} />
        </Modal.Body>
        <Modal.Footer>
          <DownloadQrCode
            elementId={"cipher-qr-encoded"}
            filename={props.encyptionType + "-encrypted-file.png"}
          />
          <DownloadPlainText
            filename={props.encyptionType + "-encrypted-file.txt"}
            data={cipheredMessage}
          />
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
  encyptionType: PropTypes.string,
};
