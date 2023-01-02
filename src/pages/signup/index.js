import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Rocket } from "../../assets/index";
import { Link } from "react-router-dom";
import { Input, Header, Footer } from "../../components/index";
import { UserSignup } from "../../utils";
import axios from "axios";

function Signup() {
  const [text, setText] = useState("");
  const [inpval, setInpval] = useState({
    Name: "",
    Email: "",
    Birthdate: "",
    Password: "",
  });
  const [error, setError] = useState("");

  const getData = (field, value) => {
    setInpval(() => {
      return {
        ...inpval,
        [field]: value,
      };
    });

    setError(() => {
      return {
        ...error,
        [field]: null,
      };
    });
  };
  const handleSubmit = async () => {
    let res = await axios.post("http://localhost:7001/todos", inpval);

    let errors = {};

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { Email, Password, Name, Birthdate } = inpval;
    if (Name === "") {
      errors["Name"] = "Name is required";
    }
    if (Email === "") {
      errors["Email"] = "Email is required";
    }
    if (!emailRegex.test(Email)) {
      errors["Email"] = "Email Formating invalid";
    }
    if (Birthdate === "") {
      errors["Birthdate"] = "Date is required";
    }
    if (Password === "") {
      errors["Password"] = "Password is required";
    } else {
      setInpval(res.data);
      setText("Success");
    }

    setError(errors);
    setInpval("");
  };

  // console.log(error);
  return (
    <div>
      <Header />
      <Container className="my-5 rounded-4  ">
        <Row>
          <Col lg="8">
            <div>
              <img className="img-fluid" src={Rocket} alt="" />
            </div>
          </Col>
          <Col lg="3" className=" mx-auto  mt-5 pb-5 px-3 rounded-5">
            <Form action="">
              <span className="fs-1 text-success">{text}</span>
              {UserSignup.map((item, index) => {
                return (
                  <Input
                    key={index.toString()}
                    onChange={(name, value) => getData(name, value)}
                    value={inpval}
                    item={item}
                    inError={error}
                  />
                );
              })}
              <Button
                variant="primary"
                onClick={() => handleSubmit()}
                style={{ background: "rgb(67, 185, 127)" }}
              >
                Signup
              </Button>
            </Form>
            <span className="fs-5 my-5">
              already have a account?
              <Alert.Link as={Link} to={"/login"} className="d-flex mx-auto">
                Login
              </Alert.Link>
            </span>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
export default Signup;
