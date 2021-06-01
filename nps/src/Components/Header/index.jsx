import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const index = ({ title, routes = [] }) => (
    <Navbar bg="danger" variant="dark">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
      <Nav className="mr-auto">
        {routes.filter(({ header = true }) => header).map((route) => (
          <Link key={route.path} className="nav-link" to={route.path}>{route.name}</Link>
          ))}
      </Nav>
    </Navbar>
)

export default index;