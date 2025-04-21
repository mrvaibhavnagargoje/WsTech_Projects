import "./App.css"
import { blog } from "./Data/blog"
import Footer from "./Footer"
import Header from "./Header"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons'
import CountState from "./CountState"
import PasswordHide from "./PasswordHide"
import Menu from "./Menu"
import ModelForm from "./ModelForm"
function App() {
  const headerInfo = {
    email: "vaibhav@gmail.com",
    phone: 9099099090,
  }

  return (
    <>
      <div className="main">
        {/* <Menu/> */}
     {/* <PasswordHide/> */}
     <ModelForm/>

        <Header headerInfo={headerInfo} cname="IT">
          <h1>Welcome to Header Page</h1>
          <FontAwesomeIcon icon={faCoffee} />
          <FontAwesomeIcon icon={faPhone} />
        </Header>

        {/* <Container fluid>
          <Container>
            <Row>
              <Col className="col-12 text-center">
                <h1>Our Courses</h1>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container> */}
        <Container>
          <Row>
            {blog.map((v, i) => {
              return <ProductItems pitems={v} key={i}/>
            })}
          </Row>
        </Container>

        <Footer />
        <CountState/>
      </div>
    </>
  )
}

export default App

function ProductItems({ pitems }) {
  return (
    <>
      <div className="col-lg-3 mb-4">
        <Card>
          <Card.Body>
            <Card.Title>{pitems.title}</Card.Title>
            <Card.Text>{pitems.body}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
