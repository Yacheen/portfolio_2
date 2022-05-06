import React from "react";
import { Project } from "./Project";
import audiophileecommerce from "../assets/images/audiophilehero.png";
import yassincodesimage from "../assets/images/yassincodes1.jpg";
import fylolandingpage from "../assets/images/fylolandingpageimage.webp";
export const ProjectsSection = () => {
	return (
		<div className="projects">
			<div className="projects-content">
				<h2>Projects</h2>

				<div className="projects-list">
					<div className="projects-row">
						<Project
							projectLink={
								"https://www.audiophile.yassinweb.dev/"
							}
							codeLink={
								"https://github.com/Yacheen/audiophile-ecommerce-website"
							}
							description={
								"Created a complete frontend of an ecommerce website where you can shop for anything audio related with a checkout form, using React context API & local storage"
							}
							image={audiophileecommerce}
							name={"Ecommerce website"}
							color={"bubblegum-pink"}
						/>
						<Project
							projectLink={"https://yassincodes.com/"}
							description={
								"Developed a real-time Twitch-like chat application authenticated via oAuth, with in-depth roles & interactions such as moderator, emotes, banning, seeing eachother's profiles, and more."
							}
							image={yassincodesimage}
							name={
								<>
									yassinCodes.com
									<br />
									chat app
								</>
							}
							color={"bubblegum-green"}
							codeLink={false}
						/>
						<Project
							name={
								<>
									Fylo
									<br />
									landing page
								</>
							}
							image={fylolandingpage}
							description={
								"Created a mobile-first & responsive landing page with animations using mainly CSS flexbox"
							}
							projectLink={
								"https://fylo-landing-page.yassinweb.dev/"
							}
							codeLink={
								"https://github.com/Yacheen/Fylo-landing-page"
							}
							color={"bubblegum-blue"}
						/>
					</div>
					<div className="projects-row">
						<Project />
						<Project />
						<Project />
					</div>
					<div className="projects-row">
						<Project />
					</div>
				</div>
			</div>
		</div>
	);
};
