import React from "react";
import yassincodesgif from "../assets/yassincodeschatgif.webm";
import { useMediaQuery } from "@mui/material";

export const HeroSection = () => {
	const isMobile = useMediaQuery("(max-width: 624px)");
	return (
		<div className="hero-section">
			<div className="hero-section-content">
				<div className="hero-about">
					<h1>Yassin Moussaoui</h1>
					<h2>Software Developer</h2>
					<p>
						Creating mobile-responsive solutions, providing
						great user experiences
						<br /> <br />
						Nice to meet you!
					</p>
				</div>
				{isMobile ? null : (
					<div className="hero-yassincodes-project">
						<div className="hero-yassincodes-description">
							<h3>
								Custom chatroom authenticated via Twitch oAuth
							</h3>
							<a
								href="https://yassincodes.com/stream"
								target="_blank"
								rel="noreferrer"
							>
								<button data-theme className="shadow">
									Learn more
								</button>
							</a>
						</div>
						<div className="hero-yassincodes-gif">
							<video autoPlay loop={true} muted={true}>
								<source
									src={yassincodesgif}
									type="video/webm"
								/>
							</video>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
