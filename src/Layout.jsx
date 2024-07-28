import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,Outlet } from 'react-router-dom';


 const Layout=()=>{
  return(
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="Insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="Display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="Update">Update</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div id="wrapper">
<Outlet/>
      </div>
      <hr  size="5" color="blue"/ >

    </>
  )
}
export default Layout;