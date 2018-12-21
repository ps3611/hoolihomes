import React, { Component } from 'react'

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<nav className="navbar is-link" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a href="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<a href="/" className="navbar-item">
								<strong>Home</strong>
							</a>
							<a href="/" className="navbar-item">
								<strong>Rates</strong>
							</a>
							<div className="navbar-item has-dropdown is-hoverable">
								<a href="/" className="navbar-link">
									<strong>About Us</strong>
								</a>
								<div className="navbar-dropdown">
									<a href="/" className="navbar-item">
										About MTH
									</a>
									<a href="/" className="navbar-item">
										Team
									</a>
									<a href="/" className="navbar-item">
										Contact Us
									</a>
								</div>
							</div>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons">
									<a href="/" className="button is-light">
										<strong>Sign up</strong>
									</a>
									<a href="/" className="button is-light">
										<strong>Log in</strong>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar
