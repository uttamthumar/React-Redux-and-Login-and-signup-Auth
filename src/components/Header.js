import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/add.svg";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
export const Header = (props) => {
    const history = useNavigate();

    function cartHandler(){
        
        history("/cart")
    }

    function homeHandler(){
        
        history("/hom")
    }
    const result = useSelector((state) => state.cardItems)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary">
        <Container fluid>
          <Navbar id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-4 mx-3 text-white opacity-75">
                <span>
                  <img className="size1  bg-primary" src={img1} alt="" />
                  <span className="position-absolute fs-5 top-0  rounded-4 px-2 bg-secondary border">
                    {result.length}
                  </span>
                </span>
              </Nav.Link>
              <Nav.Link className=" my-auto  mx-auto text-white ">
                <Button onClick={cartHandler} className=" px-3 py-2   bg-secondary border">
                  Cart
                </Button>
                <Button onClick={homeHandler} className=" px-3 py-2 mx-5  bg-secondary border">
                  Home
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
};
