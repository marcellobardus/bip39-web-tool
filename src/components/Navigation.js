import React from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar, Icon } from "rsuite";

export default function Navigation() {
  return (
    <div>
      <Navbar>
        <Navbar.Body>
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
        </Navbar.Body>
      </Navbar>
    </div>
  );
}
