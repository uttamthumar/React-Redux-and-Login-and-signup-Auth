import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin } from "../../utils";
import { Footer, Header, Signin } from "../../components/index";
import { Drow } from "../../assets/index";
import { Tooltip } from "react-bootstrap";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [msg, setMsg] = useState("");
  const [inpval, setInpval] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState({});
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

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   let errors = {};
  //   let isFormValid = false;
  //   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   const { Email, Password } = inpval;
  //   const getuserArr = data
  //   console.log("getuserArr", getuserArr);
  //   if (Email === "") {
  //     errors["Email"] = "Email is required";
  //     isFormValid = false;
  //   }
  //    else if (!emailRegex.test(Email)) {
  //     errors["Email"] = "Email Formating invalid";
  //     isFormValid = false;
  //   }
  //   if (Password === "") {
  //     errors["Password"] = "Password is required";
  //     isFormValid = false;
  //   } else {
  //     if (getuserArr) {
  //       const userData = getuserArr[0];
  //       console.log("Email",getuserArr[0] )
  //       if (userData.Email === Email && userData.Password === Password) {
  //         history("/profile", {
  //           state: { userName: userData.Name },
  //         });
  //         localStorage.setItem("login", true);
  //       } else {
  //         errors["Password"] = "invalid details";
  //         isFormValid = false;
  //       }
  //     }
  //   }
  //   setError(errors);
  //   return isFormValid;
  // };

  const handleSubmit = async () => {
    const isValid = Validation();

    if (isValid) {
      await axios
        .post("http://localhost:7001/login", inpval)
        .then((item) => {
          if (item.status === 200) {
            console.log("okay");
            localStorage.setItem("@user", JSON.stringify(item.data));
            history("/profile", {
              state: { userName: item.data.Name },
            });
          }
        })
        .catch((err) => {
          setMsg("invalid Details");
        });
    }
    setInpval("");
  };

  function Validation() {
    let errors = {};
    let isFormValid = true;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { Email, Password } = inpval;
    if (!Email) {
      errors["Email"] = "Email is required";
      isFormValid = false;
    }
    if (!Email.match(emailRegex)) {
      errors["Email"] = "Email Formating invalid";
      isFormValid = false;
    }
    if (Password === "") {
      errors["Password"] = "Password is required";
      isFormValid = false;
    }

    setError(errors);
    return isFormValid;
  }

  return (
    <div>
      <Header />

      <Container className="mt-5 rounded-4 p-5 ">
        <Row>
          <Col lg="8" xs={{ order: "first" }}>
            <div>
              <img className="img-fluid" src={Drow} alt="" />
            </div>
          </Col>
          <Col
            lg="3"
            xs={{ order: "last" }}
            className="mx-auto pb-5 px-3 rounded-5 my-5"
          >
            <Form>
              <span className="fs-1 text-danger">{msg}</span>
              {UserLogin.map((item, index) => {
                console.log("inpval1111", inpval);
                return (
                  <Signin
                    key={index.toString()}
                    onChange={(name, value) => getData(name, value)}
                    item={item}
                    value={inpval}
                    inError={error}
                  />
                );
              })}
              <Button
                variant="primary"
                onClick={() => handleSubmit()}
                style={{ background: "rgb(67, 185, 127)" }}
              >
                Login
              </Button>
            </Form>

            <span className="fs-5 my-5">
              Need an account?
              <Alert.Link as={Link} to={"/signup"} className="d-flex mx-auto ">
                Sign up
              </Alert.Link>
            </span>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Login;
