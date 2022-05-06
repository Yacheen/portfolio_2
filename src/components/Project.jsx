import React from "react";

export const Project = ({
	name,
	description,
	image,
	projectLink,
	codeLink,
	color,
}) => {
	return (
		<div className={`project ${color}`}>
			<div className="project-content">
				<h3>{name}</h3>
				<img src={image} alt="" />

				<p>{description}</p>
				<div className="project-buttons">
					<a href={projectLink} target="_blank" rel="noreferrer">
						<button type="button">Project</button>
					</a>
					{codeLink ? (
						<a href={codeLink} target="_blank" rel="noreferrer">
							<button type="button">Code</button>
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};
