import React, { useState } from "react";

interface WorkData {
	title: string;
	company: string;
	description: string[];
	period: string;
}

interface WorkProps {
	data: WorkData;
	isOpen: boolean;
	toggleOpen: () => void;
}

const workData: WorkData[] = [
	{
		title: "Software Engineer",
		company: "ModefinServer",
		description: [
			"Develop and maintain microservices using Spring Boot, enabling modular and scalable application architecture.",
			"Design and implement RESTful APIs to facilitate communication between microservices, ensuring efficient data transfer.",
			"Create responsive and user-friendly web interfaces using Angular, enhancing the user experience and usability of applications.",
			"Utilize Java EE technologies to build robust and enterprise-grade components, adhering to industry best practices.",
			"Manage and optimize databases including MSSQL, Oracle, and MySQL, ensuring data integrity and performance.",
			"Deploy and configure applications on WebLogic and Tomcat servers, ensuring high availability and reliability.",
			"Troubleshoot and resolve issues related to application performance, database connectivity, and server stability.",
			"Collaborate with cross-functional teams to gather and refine project requirements, ensuring alignment with business goals.",
			"Implement security measures such as authentication and authorization to protect sensitive data and ensure compliance with industry standards.",
		],
		period: "February 2022 - Present",
	},
	{
		title: "Android Developer",
		company: "MyMoviesAfrica",
		description: [
			"Developed and maintained a payment microservice using Spring Boot, ensuring secure and reliable payment processing for customers.",
			"Implemented payment gateway integrations, enabling seamless transactions with various payment providers, enhancing the user experience.",
			"Designed and implemented RESTful APIs for the payment microservice, allowing for easy integration with other parts of the streaming platform.",
			"Collaborated with cross-functional teams to gather and prioritize payment-related requirements, improving payment functionality and reliability.",
			"Participated in code reviews and conducted thorough testing to ensure the payment microservice's robustness and accuracy.",
			"Worked on casting functionality, allowing users to stream content to different devices seamlessly.",
			"Implemented Digital Rights Management (DRM) to protect copyrighted content and ensure secure distribution to authorized users.",
			"Integrated adaptive video streaming technologies, such as HLS and DASH, to provide users with smooth playback experiences across various devices and network conditions.",
			"Leveraged FFmpeg for video transcoding and processing tasks, enabling support for multiple video formats and resolutions.",
			"Contributed to the development of the Android app, enhancing user experience, and expanding the streaming service's reach to mobile users.",
			"Worked closely with the QA team to identify and address issues, ensuring a bug-free and stable streaming experience for Android users.",
			"Participated in agile development processes, sprint planning, and daily stand-up meetings to deliver features and improvements on schedule.",
		],
		period: "March 2021 - January 2022",
	},
];

// Work component
function Work({ data, isOpen, toggleOpen }: WorkProps) {
	const { title, company, description, period } = data;

	return (
		<div className="py-4">
			<h2 className="mb-0 flex px-2 md:px-5">
				
				<button
					className={`group relative flex flex-col md:flex-row w-full items-start md:align-center md:justify-between border-0 md:px-5 py-4 text-left text-base transition hover:z-[2] focus:z-[3] focus:outline-none`}
					type="button"
					data-te-collapse-init
					data-te-collapse-collapsed={!isOpen}
					aria-expanded={isOpen}
					onClick={toggleOpen}>
					<div className="flex w-full">
						<div
							className={`w-8 h-8 rounded-full border-2 m-2 bdr cursor-pointer my-auto md:mr-4 ${
								isOpen ? "bkg-inv" : ""
							}`}></div>
						<div className="flex w-full flex-col md:flex-row justify-between">
							<div className="flex flex-col font-poppins">
								<span className="font-semibold">{company}</span>
								<span className="font-thin">{title}</span>
							</div>
							<div>
								<p className="font-extralight">{period}</p>
							</div>
						</div>
					</div>
				</button>
			</h2>
			<div
				className={`${
					isOpen ? "open-work" : "closed-work"
				} border-0 transition-opacity md:ml-10`}>
				<div className="px-5 py-4">
					<ul>
						{description.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default function WorkSection() {
	const [openStates, setOpenStates] = useState<boolean[]>(
		Array(workData.length).fill(true)
	);

	const toggleOpen = (index: number) => {
		const newOpenStates = [...openStates];
		newOpenStates[index] = !newOpenStates[index];
		setOpenStates(newOpenStates);
	};

	return (
		<div id="accordionFlushExample">
			{workData.map((item, index) => (
				<Work
					key={index}
					data={item}
					isOpen={openStates[index]}
					toggleOpen={() => toggleOpen(index)}
				/>
			))}
		</div>
	);
}
