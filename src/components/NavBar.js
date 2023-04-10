// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <div  >
    {['md' ].map((expand) => (
      <Navbar  key={expand} bg="purplw" expand={expand} className="mb-3">
        <Container   fluid>
          <Navbar.Brand  href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
          <Navbar.Offcanvas
          
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header   closeButton>
              <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{backgroundColor:'#445374'}} >
              <Nav  style={{ Color: 'white'}} className="justify-content-end flex-grow-1 pe-2 nav nav-underline">
                <Nav.Link class="nav-link active" aria-current="page" style={{ color: 'white'}}  href="/">Home</Nav.Link>
                <Nav.Link class="nav-link active" aria-current="page" style={{ color: 'white'}} href="/AboutMe">About me</Nav.Link>
                <Nav.Link class="nav-link active" aria-current="page" style={{ color: 'white'}} href="/Projects">Projects</Nav.Link>
                <Nav.Link class="nav-link active" aria-current="page" style={{ color: 'white'}} href="/Resume">Resume</Nav.Link>
                <Nav.Link class="nav-link active" aria-current="page" style={{ color: 'white'}} href="/ContactMe">Contact me</Nav.Link>
                
              </Nav>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </div>
);
}

export default NavBar;
