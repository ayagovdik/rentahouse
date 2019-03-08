import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Navigation = () => <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Rent A House</NavbarBrand>
	<Nav className="ml-auto" navbar>
		<NavItem>
			<NavLink href="/components/">Components</NavLink>
		</NavItem>
		<NavItem>
			<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
		</NavItem>
	</Nav>
</Navbar>

export default Navigation
