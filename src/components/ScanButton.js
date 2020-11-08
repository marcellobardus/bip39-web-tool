import React, { useState } from "react";

import PropTypes from "prop-types";

import { IconButton, Icon, Modal, Button, Alert } from "rsuite";

import QrReader from "react-qr-reader";

export default function ScanButton(props) {
  const [showModal, setShowModal] = useState(false);

  const handleScan = (result) => {
    if (result) {
      setShowModal(false);
      Alert.success("Scanned");
      props.onScan(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <IconButton
        icon={<Icon icon="qrcode" />}
        appearance="primary"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Scan
      </IconButton>
      <Modal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Scan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QrReader
            delay={300}
            style={{ height: 240, width: 320 }}
            onScan={handleScan}
            onError={handleError}
          />
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

ScanButton.propTypes = {
  onScan: PropTypes.func,
};
