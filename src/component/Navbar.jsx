import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './NavLink';

function CollapsibleExample() {
  const loc =[
    {title:"Home",to:'/' },
    {title:"About",to:'/about' },
    {title:"Services",to:'/services' },
    {title:"Pricing",to:'/pricing' },
    {title:"Contact",to:'/contact' },
    {title:"ToDo List",to:'/todo' },
    {title:"Rigister",to:'/register' },
    {title:"Sing In",to:'/singin' },
  ]
  return (
    <Navbar collapseOnSelect expand="lg"  className='navbar' fixed='top'>
      <Container>
        <Navbar.Brand href="#home" ><h1 className='logo-Logis'>Logis</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav >
            {
              loc.map((e)=>{
                return(<>
                  <NavLink e={e}/>
                </>)
              })
            }
          {/* <Nav.Link onClick={()=>{navigate("/")}} className='nav-items'>Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate("/about")}} className='nav-items'>About</Nav.Link>
          <Nav.Link onClick={()=>{navigate("/services")}} className='nav-items'>Services</Nav.Link>
          <Nav.Link onClick={()=>{navigate("/pricing")}}  className='nav-items'>Pricing</Nav.Link>            
          <Nav.Link onClick={()=>{navigate("/contact")}} className='nav-items'>Contact</Nav.Link> */}
          </Nav>
          <button className='but-get-started'>Get a Quote</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;