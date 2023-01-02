import img1 from "../../assets/hero-img.png";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { SideBar } from "../index";
import { Header } from "../../components/index";

function Home() {
  return (
    <div>
      <Header />
      <Container className=" rounded-4 p-5 ">
        <Row>
          <Col lg="6" className="my-auto">
            <h1> Better Solutions For Your Business</h1>
            <h5 className=" my-5">
              We are team of talented designers making websites with Bootstrap
            </h5>
            <div className="my-4">
              <span className="button1 fs-6 rounded-pill p-3 px-4">
                Get Started
              </span>
            </div>
          </Col>
          <Col lg="6" className="mt-3">
            <div>
              <img className="img-fluid" src={img1} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
