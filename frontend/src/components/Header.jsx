import React from 'react';
import {
	Navbar,
	Nav,
	Container,
	Form,
	Row,
	Col,
	Button,
} from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	return (
		<header className="position-fixed w-100 z-3">
			<Navbar variant="dark" expand="lg" collapseOnSelect className="navBar">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand><i>PRO</i>Shop</Navbar.Brand>
					</LinkContainer>
					<Form.Group>
						<Form inline>
							<Row>
								<Col xs="auto">
									<Form.Control
										type="text"
										placeholder="Search"
										className=" mr-sm-2"
										size='sm'
									/>
								</Col>
								<Col xs="auto">
									<Button type="submit" size='sm'>Submit</Button>
								</Col>
							</Row>
						</Form>
					</Form.Group>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/categories">
								<Nav.Link>Categories</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/cart">
								<Nav.Link>
									<FaShoppingCart /> Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>
									<FaUser /> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
