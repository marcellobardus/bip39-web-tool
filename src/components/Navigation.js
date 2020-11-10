import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar, Icon, Sidenav } from "rsuite";

const panelStyles = {
  padding: "15px 20px",
  color: "#aaa",
};

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Icon
        style={{ alignSelf: "center" }}
        icon="arrow-circle-o-right"
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
            <Nav.Item eventKey="1" icon={<Icon icon="eye" />}>
              <Link to={"/aes-decrypt"}> AES-Decrypt </Link>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="eye-slash" />}>
              <Link to={"/aes-encrypt"}> AES-Encrypt </Link>
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Icon icon="eye-slash" />}>
              <Link to={"/ecdsa-encrypt"}> ECDSA-Encrypt </Link>
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<Icon icon="eye" />}>
              <Link to={"/ecdsa-decrypt"}> ECDSA-Decrypt </Link>
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<Icon icon="wrench" />}>
              <Link to={"/derivate"}> Derivation </Link>
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<Icon icon="book" />}>
              <Link to={"/mnemonic"}> Mnemonic </Link>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
