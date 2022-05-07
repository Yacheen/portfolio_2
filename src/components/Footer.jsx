import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-content">
				<div className="footer-links">
					<a href="#Home">
						<h2>Yassin's Portfolio</h2>
					</a>

					<a
						href="https://github.com/Yacheen"
						target="_blank"
						rel="noreferrer"
					>
						<div className="link">
							Github
							<GitHubIcon fontSize="large" color="primary" />
						</div>
					</a>
				</div>
				<p>© Copyright 2022 Yassin </p>
			</div>
		</div>
	);
};
export default Footer;
