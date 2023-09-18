import React from "react";

interface EducationData {
	degree: string;
	school: string;
	period: string;
}

interface EducationProps {
	data: EducationData;
}

const educationData: EducationData[] = [
	{
		degree:
			"Bachelor of Arts Interior Design with IT, Second Class Honors (Upper Division)",
		school: "Maseno University",
		period: "August 2016 - March 2021",
	},
	{
		degree: "Certificate in Software Development",
		school: "Moringa School",
		period: "February 2021 - June 2021",
	},
	{
		degree: "Kenya Certificate of Secondary Education (KCSE)",
		school: "Alliance High School",
		period: "February 2012 - December 2015",
	},
	{
		degree: "Kenya Certificate of Primary Education (KCPE)",
		school: "Booker Academy",
		period: "November 2011",
	},
];

function Education({ data }: EducationProps) {
	const { degree, school, period } = data;

	return (
		<div className="py-4">
			<h2 className="mb-0 flex px-2 md:px-5">
				<div
					className="w-8 h-8 rounded-full m-2 border-2 bdr cursor-pointer my-auto md:mr-4"
					/* You can add your circle styles here */
				></div>
				<div className="flex w-full flex-col md:flex-row justify-between">
					<div className="flex flex-col font-poppins">
						<span className="font-semibold">{school}</span>
						<span className="font-thin">{degree}</span>
					</div>
					<div className=" md:text-end">
						<p className="font-extralight">{period}</p>
					</div>
				</div>
			</h2>
		</div>
	);
}

export default function EducationSection() {
	return (
		<div id="accordionFlushExample">
			{educationData.map((item) => (
				<Education key={item.degree} data={item} />
			))}
		</div>
	);
}
