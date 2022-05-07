import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export const Navbar = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className="navbar">
			<div className="navbar-content">
				<h2 id="#About">Yassin's Portfolio</h2>
				<div className="light-switch">
					<Switch
						value="yo"
						onClick={() => setDarkMode(!darkMode)}
						label="Dis The end"
						labelPlacement="end"
						color="secondary"
					/>
					<p>
						{darkMode ? (
							<LightModeOutlinedIcon fontSize="large" />
						) : (
							<DarkModeOutlinedIcon fontSize="large" />
						)}
					</p>
				</div>
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
