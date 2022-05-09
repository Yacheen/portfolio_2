import React from "react";
import { Project } from "./Project";
import audiophileecommerce from "../assets/images/audiophilehero.png";
import yassincodesimage from "../assets/images/yassincodes1.jpg";
import fylolandingpage from "../assets/images/fylolandingpageimage.webp";
import blogrlandingpage from "../assets/images/blogrlandingpage.jpg";
import ffxivfriendslistimage from "../assets/images/ffxivfriendslist.png";
import riotblizzportfolio from "../assets/images/riotblizzportfolio.png";
import pexelsphotoviewer from "../assets/images/pexelsphotoviewer.png";

export const ProjectsSection = () => {
	return (
		<div className="projects">
			<div className="projects-content">
				<h2 id="Projects">Projects</h2>
				<div className="projects-list">
					<Project
						projectLink={"https://www.audiophile.yassinweb.dev/"}
						codeLink={
							"https://github.com/Yacheen/audiophile-ecommerce-website"
						}
						description={
							"Created a complete frontend of an ecommerce website where you can shop for anything audio related with a checkout form, using React context API for the shopping cart & local storage to save items."
						}
						image={audiophileecommerce}
						name={"Ecommerce website"}
						color={"bubblegum-orange"}
					/>
					<Project
						projectLink={"https://yassincodes.com/"}
						description={
							"Real-time chat application with oAuth, including permissions such as moderator, & features like emotes/emojis, banning, viewing eachother's profiles, and more. \n Learned backend skills involving Nodejs, Mongodb, websockets, middleware, and Redis cache."
						}
						image={yassincodesimage}
						name={
							<>
								yassinCodes.com
								<br />
								chat app
							</>
						}
						color={"bubblegum-darkBlue"}
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
						projectLink={"https://fylo-landing-page.yassinweb.dev/"}
						codeLink={
							"https://github.com/Yacheen/Fylo-landing-page"
						}
						color={"bubblegum-blue"}
					/>
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
						projectLink={"https://mock-landing-page.yassinweb.dev/"}
						codeLink={
							"https://github.com/Yacheen/Blogr-landing-page"
						}
						color={"bubblegum-pink"}
					/>
					<Project
						name={<>FFXIV Friendslist</>}
						image={ffxivfriendslistimage}
						description={
							"Using the FFXIV API, created a website to view my raid group's characters stats in a game - strengthening React frontend fundamentals"
						}
						projectLink={"https://ffxiv-friendslist.yassinweb.dev/"}
						codeLink={
							"https://github.com/Yacheen/FFXIV-Friendslist"
						}
						color={"bubblegum-purple"}
					/>
					<Project
						name={
							<>
								Riot Blizz's
								<br />
								Portfolio
							</>
						}
						image={riotblizzportfolio}
						description={
							"Comissioned from a Riot Games employee to create a portfolio with a contact form & animated timelines"
						}
						projectLink={"https://www.blizz.lol/"}
						codeLink={"https://github.com/Yacheen/Brads-Portfolio"}
						color={"bubblegum-green"}
					/>

					<Project
						name={
							<>
								Pexels
								<br />
								photo viewer
							</>
						}
						image={pexelsphotoviewer}
						description={
							"Using the Pexels API, search for only curated, high quality photography of any subject of your choosing"
						}
						projectLink={"https://photo-viewer.yassinweb.dev/"}
						codeLink={
							"https://github.com/Yacheen/PexelsAPI-photo-viewer"
						}
						color={"bubblegum-yellow"}
					/>
				</div>
				{/*manually edit the last project*/}
			</div>
		</div>
	);
};
