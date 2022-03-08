import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './App.css';

function App() {
  return (
    
    <div className="App">
            <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Michael Stark</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">About Me</Nav.Link>
      <Nav.Link href="#features">Past Projects</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
      
      <header className="App-header">

  
        <h1 class="text-3xl font-bold underline">
           Hello world!
        </h1>

      </header>
    </div>
  );
}

export default App;
