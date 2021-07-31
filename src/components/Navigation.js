import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Icon, Sidenav } from "rsuite";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Icon
        style={{ alignSelf: "center" }}
        icon='arrow-circle-o-right'
        onClick={() => {
          setExpanded(!expanded);
        }}
      />
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["1", "2"]}
        activeKey={"1"}
        appearance={"subtle"}
        style={{ height: "100vh", position: "absolute" }}
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item
              eventKey='1'
              icon={<Icon icon='eye-slash' />}
              componentClass={Link}
              to={"/aes-encrypt"}
            >
              AES-ENCRYPT
            </Nav.Item>
            <Nav.Item
              eventKey='2'
              icon={<Icon icon='eye-slash' />}
              componentClass={Link}
              to={"/aes-decrypt"}
            >
              AES-DECRYPT
            </Nav.Item>
            <Nav.Item
              eventKey='3'
              icon={<Icon icon='eye-slash' />}
              componentClass={Link}
              to={"/ecdsa-encrypt"}
            >
              ECDSA-Encrypt
            </Nav.Item>
            <Nav.Item
              eventKey='4'
              icon={<Icon icon='eye-slash' />}
              componentClass={Link}
              to={"/ecdsa-decrypt"}
            >
              ECDSA-Decrypt
            </Nav.Item>
            <Nav.Item
              eventKey='5'
              icon={<Icon icon='eye-slash' />}
              componentClass={Link}
              to={"/derivation"}
            >
              Derivation
            </Nav.Item>
            <Nav.Item
              eventKey='6'
              icon={<Icon icon='eye-slash' />}
              componentClass={Link}
              to={"/mnemonic"}
            >
              Mnemonic
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
