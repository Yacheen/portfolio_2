import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import useLocalStorage from "../hooks/useLocalStorage";
export const Navbar = () => {
	//darkmode state with classes
	const [darkmode, setDarkmode] = useLocalStorage("theme", false);
	useEffect(() => {
		switch (darkmode) {
			case false:
				document.documentElement.setAttribute("data-theme", "light");
				break;

			case true:
				document.documentElement.setAttribute("data-theme", "dark");
				break;
			default:
				break;
		}
	}, [darkmode, setDarkmode]);

	return (
		<div className="navbar">
			<div className="navbar-content">
				<h2 id="#About">Portfolio</h2>
				<div className="light-switch">
					<Switch
						defaultChecked={darkmode ? true : false}
						onClick={() => setDarkmode(!darkmode)}
						color="warning"
					/>
					<p>
						{darkmode ? (
							<DarkModeOutlinedIcon fontSize="large" />
						) : (
							<LightModeOutlinedIcon fontSize="large" />
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
