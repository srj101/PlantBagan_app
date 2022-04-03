import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas,Row ,Col} from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_area'>
          <Container >
              <Row>
              <Navbar bg="light" expand={false} className="navigation" sticky="top">
                <Col lg={12}>
                <div className="searchBox">
                  <input type="text" />
                </div>
                </Col>
                  <Navbar.Toggle aria-controls="offcanvasNavbar" className='navigationToggleController' children="Menu" label="MENU"/>
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    className="offCanvasNavigation"
                    scroll= {true}
                    backdrop= {true}
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">Plant Bagan</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link to="/">Home</Link>
                        <Link to="/videos">Video</Link>
                        <Link to="/news">News</Link>
                        <Link to="/course">Course</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/offer">Offer</Link>
                        <Link to="/about">About Us</Link>
                        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                          <NavDropdown.Item className='actionnav' href="#action3">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                            Something else here
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Navbar>
              </Row>
          </Container>
        </div>
    );
};

export default Header;