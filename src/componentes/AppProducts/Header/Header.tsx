
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Carga de Productos</Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header