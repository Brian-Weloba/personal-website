import React from "react";

const projects = [
	{
		id: 1,
		title: "Project 1",
		description: "Description of Project 1.",
		link: "https://example.com/project1",
	},
	{
		id: 1,
		title: "Project 2",
		description: "Description of Project 2.",
		link: "https://example.com/project2",
	},
	// Add more projects as needed
];

export default function Projects() {
	return (
		<div className="flex flex-col">
			<div className="p-4 border-b-2 bdr">
				<h1>🚧 Under Construction 🚧</h1>
				<p className="text-lg mt-4">
					We&apos;re hard at work building something amazing! Stay
					tuned for our fantastic projects.
				</p>
			</div>
			{/* {projects.map((project) => (
				<div key={project.id} className="p-4 border-b-2 bdr">
					<h2 className="text-2xl font-semibold">{project.title}</h2>
					<p className="text-lg">{project.description}</p>
					<a
						href={project.link}
						className="text-blue-600 hover:underline mt-2"
						target="_blank"
						rel="noopener noreferrer">
						View Project
					</a>
				</div>
			))} */}
		</div>
	);
}
