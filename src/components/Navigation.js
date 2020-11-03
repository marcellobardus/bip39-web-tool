import React from "react";
import { Link } from "react-router-dom";

import { Nav, Sidenav, Icon } from "rsuite";

const styles = {
  width: 250,
  display: "inline-table",
  marginRight: 10,
};

export default function Navigation() {
  return (
    <div style={styles}>
      <Sidenav>
        <Sidenav.Body>
          <Nav.Item eventKey="1" icon={<Icon icon="eye-slash" />}>
            <Link to={"/encrypt"}> Encrypt </Link>
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="eye" />}>
            <Link to={"/decrypt"}> Decrypt </Link>
          </Nav.Item>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
}
