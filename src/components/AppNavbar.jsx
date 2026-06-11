import { Container, Nav, Navbar } from 'react-bootstrap'

function AppNavbar() {
    return (
        <Navbar expand="lg" fixed="top" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="brand">
                    <span>&lt;/&gt;</span> Rittiporn Phungphai
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" className="navbar-toggle" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto nav-menu">
                        <Nav.Link href="#home">หน้าแรก</Nav.Link>
                        <Nav.Link href="#about">เกี่ยวกับ</Nav.Link>
                        <Nav.Link href="#skills">ทักษะ</Nav.Link>
                        <Nav.Link href="#experience">ประสบการณ์</Nav.Link>
                        <Nav.Link href="#projects">โครงการ</Nav.Link>
                        <Nav.Link href="#contact">ติดต่อ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar