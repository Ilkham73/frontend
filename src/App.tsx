import { Container, Navbar, Nav, Row, Col } from "react-bootstrap"
import { LeftMenu } from "./components/LeftMenu/LeftMenu"
import { NavLink, Outlet } from "react-router-dom"

import { Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const  App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <Image src="https://qhome.su/upload/aspro.optimus/d0d/7urm2tow3w7s2gnouyf6bzw8i7ynsz8u.jpg" alt="Description" width="150" height="50" rounded />
    </a>
  </div>
</nav>   
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
              <LeftMenu /> 
              <NavLink to={'discount'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}> Скидки </NavLink>
              <NavLink to={'buy'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>  Как купить</NavLink>
              <NavLink to={'warranty'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}> Гарантия</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"  />
             <button className="btn btn-dark" type="button">Поиск</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container> 
        <Row style={{ marginTop: '10px'}}>
            
            <Col sm={10} md={10} lg={0}>
             
                <Outlet />
            </Col>
        </Row>
    </Container>
    
    </>
  );
}
export default App; 
