import React from "react";
import { Project } from "./Project";
import audiophileecommerce from "../assets/images/audiophilehero.png";
import yassincodesimage from "../assets/images/yassincodes1.jpg";
import fylolandingpage from "../assets/images/fylolandingpageimage.webp";
import blogrlandingpage from "../assets/images/blogrlandingpage.jpg";
import ffxivfriendslistimage from "../assets/images/ffxivfriendslist.png";
export const ProjectsSection = () => {
	return (
		<div className="projects">
			<div className="projects-content">
				<h2 id="Projects">Projects</h2>
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
								"Created a complete frontend of an ecommerce website where you can shop for anything audio related with a checkout form, using React context API for the shopping cart & local storage to save items."
							}
							image={audiophileecommerce}
							name={"Ecommerce website"}
							color={"bubblegum-pink"}
						/>
						<Project
							projectLink={"https://yassincodes.com/"}
							description={
								"Developed a real-time Twitch-like chat application authenticated via oAuth, with in-depth roles & interactions such as moderator, emotes, banning, seeing eachother's profiles, and more. \n Developed backend skills involving Nodejs, Mongodb, Redis, websockets, and more."
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
						<Project
							name={
								<>
									Blogr
									<br />
									landing page
								</>
							}
							image={blogrlandingpage}
							description={
								"Created a landing page that has significantly improved html & css with a mobile responsive design"
							}
							projectLink={
								"https://mock-landing-page.yassinweb.dev/"
							}
							codeLink={
								"https://github.com/Yacheen/Blogr-landing-page"
							}
							color={"bubblegum-orange"}
						/>
						<Project
							name={
								<>
									<p>FFXIV Friendslist</p>
								</>
							}
							image={ffxivfriendslistimage}
							description={
								"Using the FFXIV API, created a website to view my raid group's characters stats in a game - strengthening React and state management/rendering technical skills"
							}
							projectLink={
								"https://ffxiv-friendslist.yassinweb.dev/"
							}
							codeLink={
								"https://github.com/Yacheen/FFXIV-Friendslist"
							}
							color={"bubblegum-hotPink"}
						/>
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
