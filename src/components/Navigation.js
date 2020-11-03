import React from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar, Icon } from "rsuite";

export default function Navigation() {
  return (
    <div>
      <Navbar>
        <Navbar.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="eye-slash" />}>
              <Link to={"/encrypt"}> Encrypt </Link>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="eye" />}>
              <Link to={"/decrypt"}> Decrypt </Link>
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Icon icon="eye" />}>
              <Link to={"/aes-decrypt"}> Aes Decrypt </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
}
