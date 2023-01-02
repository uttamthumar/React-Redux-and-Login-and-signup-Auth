import { React, useState, useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

function SideBar({ show }) {
  const history = useNavigate();
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setLogin(true);
    }
  }, []);
  function logoutHandler(e) {
    localStorage.removeItem("login");
    setLogin(false);
    history("/login");
  }

  function loginHandler() {
    history("/login");
  }

  return (
    <>
      <Container
        fluid
        className="side-bar"
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <Row>
          <Col
            style={{ width: show ? "200px" : "0", pointerEvents: "auto" }}
            className="col-auto min-vh-100 bg-dark d-block p-0 sider-bar-main-div"
          >
            <ul
              className="list list-unstyled ps-5 "
              style={{ display: show ? "block" : "none" }}
            >
              <li className="">
                {login ? (
                  <Nav.Link
                    onClick={logoutHandler}
                    className=" text-white fs-3  "
                  >
                    logout
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    onClick={loginHandler}
                    className="text-white fs-3  "
                  >
                    Login
                  </Nav.Link>
                )}
              </li>
              <li className="my-5">
                <NavLink
                  as={Link}
                  to={"/signup"}
                  className="text-white fs-3 text-decoration-none "
                
                >
                  Signup
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  as={Link}
                  to={"/contact"}
                  className="text-white fs-3 text-decoration-none list-style-none "
                 
                >
                  Contact
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  as={Link}
                  to={"/about"}
                  className="text-white fs-3 text-decoration-none list-style-none "
                  
                >
                  About
                </NavLink>{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SideBar;
