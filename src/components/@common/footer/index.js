import React from "react";
import { Container } from "react-bootstrap";

var date = new Date().getFullYear();
function Footer() {
  return (
    <div className="bg-primary ">
      <Container fluid className="bg-color1 ">
        <div  className="fs-3 opacity-75 py-5 text-center">
          © {date}Copyright: MDBootstrap.com
        </div>
      </Container>
    </div>
  );
}

export default Footer;
