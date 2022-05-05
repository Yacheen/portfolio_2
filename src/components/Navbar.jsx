import React from "react";

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content">
				<h2 id="#About">Yassin's Portfolio</h2>
				<ul className="nav-links">
					<a href="#Projects">
						<li className="link">Projects</li>
					</a>
					<a href="#Contact">
						<li className="link">Contact</li>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
