import React, { useEffect } from "react";
import Switch from "@mui/material/Switch";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import useLocalStorage from "../hooks/useLocalStorage";
import { useMediaQuery } from "@mui/material";
export const Navbar = () => {
	//darkmode state with classes
	const [darkmode, setDarkmode] = useLocalStorage("theme", false);
	const isMobile = useMediaQuery("(max-width:490px)");
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
				<div className="light-switch">
					<p>
						{darkmode ? (
							<DarkModeOutlinedIcon className="icon" />
						) : (
							<LightModeOutlinedIcon className="icon" />
						)}
					</p>
					<Switch
						size="medium"
						defaultChecked={darkmode ? true : false}
						onClick={() => setDarkmode(!darkmode)}
						color="warning"
					/>
				</div>
				<h2 id="Home">Portfolio</h2>
				{isMobile ? null : (
					<ul className="nav-links">
						<a href="#Projects">
							<li className="hover-underline-animation">
								Projects
							</li>
						</a>
						<a href="#Contact">
							<li className="hover-underline-animation">
								Contact
							</li>
						</a>
					</ul>
				)}
			</div>
		</div>
	);
};

export default Navbar;
