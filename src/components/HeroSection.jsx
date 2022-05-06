import React from "react";
import yassincodesgif from "../assets/yassincodeschatgif2.gif";

export const HeroSection = () => {
	return (
		<div className="hero-section">
			<div className="hero-section-content">
				<div className="hero-about">
					<h1>Yassin Moussaoui</h1>
					<h2>Software Engineer</h2>
					<p>
						I enjoy creating mobile-responsive solutions, providing
						great user experiences
					</p>
					<p>Nice to meet you!</p>
				</div>

				<div className="hero-yassincodes-project">
					<div className="hero-yassincodes-description">
						<button type="button">Learn more</button>
						<h3>
							Custom Twitch chat authenticated via Twitch oAuth
						</h3>
					</div>

					<div className="hero-yassincodes-gif">
						<img src={yassincodesgif} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};
