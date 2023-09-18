import React from "react";
import { FaAndroid, FaCode, FaJava, FaUbuntu } from "react-icons/fa";
import {
	SiMicrosoftsqlserver,
	SiMysql,
	SiPostgresql,
	SiApachekafka,
	SiRabbitmq,
	SiDocker,
	SiAdobeillustrator,
	SiAdobexd,
	SiFigma,
} from "react-icons/si";

interface Skill {
	title: string;
	level: string;
	progress: number;
}

interface SkillsProps {
	category: string;
}

const software = [
	{
		title: "Android Studio",
		icon: <FaAndroid />,
	},
	{
		title: "Visual Studio Code",
		icon: <FaCode />,
	},
	{
		title: "IntelliJ IDEA",
		icon: <FaJava />,
	},
	{
		title: "Adobe Illustrator",
		icon: <SiAdobeillustrator />,
	},
	{
		title: "Adobe XD",
		icon: <SiAdobexd />,
	},
	{
		title: "Figma",
		icon: <SiFigma />,
	},
	{
		title: "Microsoft SQL Server",
		icon: <SiMicrosoftsqlserver />,
	},
	{
		title: "MySQL",
		icon: <SiMysql />,
	},
	{
		title: "PostgreSQL",
		icon: <SiPostgresql />,
	},
	{
		title: "Apache Kafka",
		icon: <SiApachekafka />,
	},
	{
		title: "RabbitMQ",
		icon: <SiRabbitmq />,
	},
	{
		title: "Docker",
		icon: <SiDocker />,
	},
	{
		title: "Ubuntu",
		icon: <FaUbuntu />,
	},
];

const Skills: React.FC<SkillsProps> = ({ category }) => {
	const skillsData: Record<string, Skill[]> = {
		frontend: [
			{
				title: "Angular",
				level: "Expert",
				progress: 85,
			},
			{
				title: "Responsive Web Design",
				level: "Expert",
				progress: 90,
			},
			{
				title: "JavaScript/Typescript",
				level: "Expert",
				progress: 85,
			},
			{
				title: "React",
				level: "Intermediate",
				progress: 70,
			},
			{
				title: "TailwindCSS",
				level: "Expert",
				progress: 90,
			},
			{
				title: "Bootstrap 5",
				level: "Expert",
				progress: 90,
			},
			{
				title: "Next.js",
				level: "Expert",
				progress: 90,
			},
			{
				title: "Android",
				level: "Expert",
				progress: 65,
			},
		],
		backend: [
			{
				title: "Java",
				level: "Expert",
				progress: 90,
			},
			{
				title: "Spring Framework",
				level: "Expert",
				progress: 95,
			},
			{
				title: "RESTful APIs",
				level: "Expert",
				progress: 90,
			},
			{
				title: "Relational Database Management",
				level: "Expert",
				progress: 85,
			},
			{
				title: "Deployment (WebLogic & Tomcat)",
				level: "Expert",
				progress: 90,
			},
			{
				title: "Security Measures",
				level: "Expert",
				progress: 80,
			},
		],
	};

	const selectedSkills = skillsData[category] || [];

	if (category === "software") {
		// Render the "Suggested Software" div
		return (
			<div className="suggested-software">
				<h2 className="text-2xl font-semibold mb-4 bdr border-b-2">
					Software And Technologies
				</h2>
				<div className="grid grid-cols-4 gap-4 ">
					{software.map((item, index) => (
						<div
							key={index}
							className="flex flex-col text-center items-center contact-link py-2 rounded-xl">
							<div className="text-5xl">{item.icon}</div>
							<div className="mt-2">{item.title}</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="skills-list">
			<h2 className="text-2xl font-semibold mb-4 bdr border-b-2">
				{category === "frontend" ? "Frontend Skills" : "Backend Skills"}
			</h2>
			{selectedSkills.map(
				(
					skill: {
						title:
							| string
							| number
							| boolean
							| React.ReactElement<
									any,
									string | React.JSXElementConstructor<any>
							  >
							| Iterable<React.ReactNode>
							| React.ReactPortal
							| React.PromiseLikeOfReactNode
							| null
							| undefined;
						level:
							| string
							| number
							| boolean
							| React.ReactElement<
									any,
									string | React.JSXElementConstructor<any>
							  >
							| Iterable<React.ReactNode>
							| React.ReactPortal
							| React.PromiseLikeOfReactNode
							| null
							| undefined;
						progress: any;
					},
					index: React.Key | null | undefined
				) => (
					<div key={index} className="skill">
						<div className="skill-title">{skill.title}</div>
						<div className="progress">
							<div
								className="progress-bar"
								style={{ width: `${skill.progress}%` }}></div>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default Skills;
