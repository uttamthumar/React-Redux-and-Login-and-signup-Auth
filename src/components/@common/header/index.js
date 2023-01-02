import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { Logo } from "../../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { SideBar } from "../../../pages";

function Header(props) {
  const history = useNavigate();
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("@user")) {
      setLogin(true);
    }
  }, []);

  function logoutHandler(e) {
    localStorage.removeItem("@user");
    setLogin(false);
    history("/login");
  }

  function loginHandler() {
    history("/login");
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/home"}>
            <img className="img-fluid imagesize" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-4 mx-3 text-primary opacity-75">
                <FaBars
                  onClick={() => {
                    setShow(!show);
                  }}
                />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/about"}
                className="fs-4 mx-3 text-primary opacity-75"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/contact"}
                className="fs-4 mx-3 text-primary opacity-75"
              >
                Contact
              </Nav.Link>
              {login ? (
                <Nav.Link
                  onClick={logoutHandler}
                  className="fs-4 mx-3 text-primary opacity-75"
                >
                  logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={loginHandler}
                  className="fs-4 mx-3 text-primary opacity-75"
                >
                  sing in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SideBar show={show} />
    </div>
  );
}

export default Header;
