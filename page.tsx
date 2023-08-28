"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "../../public/brian-weloba.jpg";
import DynamicImage from "./components/spotify";
import WorkSection from "./components/work";
import Projects from "./components/projects";
import EducationSection from "./components/education";
import Footer from "./components/footer";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import ContactSection from "./components/contact";
import Skills from "./components/skills";
import { FaSpotify } from "react-icons/fa";

interface Skill {
	name: string;
	level: string;
	points: number;
	progress: number;
}

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [activeTab, setActiveTab] = useState("frontend");
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const [skills, setSkills] = useState<{ [key: string]: Skill }>({
		frontend: {
			name: "Front-End Development",
			level: "Intermediate",
			points: 20,
			progress: 60, // Progress in percentage
		},
		backend: {
			name: "Back-End Development",
			level: "Beginner",
			points: 10,
			progress: 30,
		},
		art: {
			name: "Digital Art",
			level: "Advanced",
			points: 30,
			progress: 90,
		},
	});

	useEffect(() => {
		const root = document.documentElement;
		if (darkMode) {
			root.style.setProperty("--foreground-rgb", "255, 255, 255");
			root.style.setProperty("--background-start-rgb", "41, 36, 35");
			root.style.setProperty("--background-end-rgb", "0, 0, 0");
		} else {
			root.style.setProperty("--foreground-rgb", "0, 0, 0");
			root.style.setProperty("--background-start-rgb", "214, 219, 220");
			root.style.setProperty("--background-end-rgb", "255, 255, 255");
		}
	}, [darkMode]);

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		const scrollingTextElement = document.querySelector(".scrolling-text");
		if (scrollingTextElement) {
			scrollingTextElement.classList.add("animate-scroll");
		}
	}, []);

	const handleClick = () => {
		window.location.href =
			"https://now-playing-sooty.vercel.app/now-playing?open";
	};

	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<aside className="w-1/12 bkg border-r-2 bdr flex flex-col justify-between">
				<div
					className="text-white cursor-pointer mx-auto mt-4 p-2 bkg-inv rounded-full"
					onClick={toggleDarkMode}>
					{darkMode ? (
						<SunIcon className="w-8 h-8 frg-text-inv" />
					) : (
						<MoonIcon className="w-8 h-8 frg-text-inv" />
					)}
				</div>
				<div className="text-4xl mx-auto mb-4">
					<p className="font-extralight font-jost">
						<span className="font-extrabold">b</span>w
					</p>
				</div>
			</aside>

			{/* Main Content */}
			<main className="w-full overflow-y-scroll">
				{/* Navbar */}
				<nav className="bg-transparent p-4 border-b-2 bdr">
					<div className="container mx-auto">
						<div className="flex justify-between items-center">
							<div className="text-2xl">
								<p className="font-thin font-jost">
									<span className="font-extrabold">brian</span>weloba
								</p>
							</div>

							<div className="md:hidden">
								{/* Add responsive mobile menu button here */}
							</div>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<div className="py-4 border-b-2 bdr">
					<div className="h-fit py-4 mx-auto overflow-hidden">
						{/* Add the scrolling text */}
						<div className="mx-auto text-5xl">
							<div
								className="scrolling-text animate-scroll font-jost"
								style={{ whiteSpace: "nowrap" }}>
								Scrolling Tagline: Because Life&apos;s Too Short for Static
								Text!
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-fit">
					<div className="border-r-2 border-b-2 bdr h-auto p-8 text-2xl font-poppins text-center">
						<h1 className="font-extrabold font-archivo">
							CTRL+ART+DELIGHT! 😄🎨🔧
						</h1>
						A{" "}
						<span className="hlgt hover:no-underline font-black cursor-pointer">
							SOFTWARE ENGINEER
						</span>{" "}
						BY DAY, AN{" "}
						<span className="hlgt hover:no-underline font-black cursor-pointer">
							ILLUSTRATOR
						</span>{" "}
						BY NIGHT, AND A GENERAL TINKERER AT ALL HOURS, I&apos;VE GOT QUITE
						THE STORY TO TELL. CURIOUS TO KNOW MORE ABOUT THE PERSON BEHIND THE
						PIXELS AND THE PUNS? LET&apos;S DIVE INTO THE TECHNICOLOR WORLD OF
						ME!
					</div>
					<div className="p-4 bdr border-b-2">
						<Image
							className="border-2 bdr rounded-lg"
							src={profilePic}
							width={1000}
							height={500}
							alt="Picture of the author"
						/>
					</div>
				</div>
				<div className="h-fit mt-8 mx-4">
					<div className="flex font-poppins font-bold">
						<div
							onClick={() => handleTabChange("frontend")}
							className={`w-1/3 py-4 border-t-2 border-l-2 border-r-2 rounded-t-xl justify-center cursor-pointer flex ${
								activeTab === "frontend" ? "active-tab" : "inactive-tab"
							}`}>
							FRONT-END DEV
						</div>
						<div
							onClick={() => handleTabChange("backend")}
							className={`w-1/3 py-4 border-t-2 border-l-2 border-r-2 rounded-t-xl bdr justify-center cursor-pointer flex ${
								activeTab === "backend" ? "active-tab" : "inactive-tab"
							}`}>
							BACK-END DEV
						</div>
						<div
							onClick={() => handleTabChange("software")}
							className={`w-1/3 py-4 border-t-2 border-l-2 border-r-2 rounded-t-xl bdr justify-center flex cursor-pointer ${
								activeTab === "software" ? "active-tab" : "inactive-tab"
							}`}>
							SOFTWARE
						</div>
					</div>
					<div className="h-full bg-transparent p-8 bdr border-x-2">
						<div className="h-fit bkgfrg-text">
							<Skills category={activeTab} />
						</div>
					</div>
				</div>
				<div>
					<div className="text-5xl capitalize font-jost font-thin py-4 pl-4 bdr border-t-2 border-b-2">
						WORK EXPERIENCE
					</div>
					<WorkSection />
				</div>
				<div>
					<div className="text-5xl capitalize font-jost font-thin py-4 pl-4 bdr border-t-2 border-b-2">
						EDUCATION
					</div>
					<EducationSection />
				</div>
				<div>
					<div className="text-5xl capitalize font-jost font-thin py-4 pl-4 bdr border-t-2 border-b-2">
						PROJECTS
					</div>
					<Projects />
				</div>
				<div className="flex justify-center h-fit bdr mt-4 ">
					<div
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						onClick={handleClick}
						className={`cursor-pointer w-fit flex h-fit bg-transparent frg-text m-4 bkg-inv border-2 rounded-2xl overflow-clip ${
							isHovered ? "bdr-inv" : "bdr"
						}`}>
						<div
							className={`h-auto flex flex-col justify-around  p-4 ${
								isHovered ? "bkg-inv" : "bkg"
							}`}>
							<FaSpotify
								className={`text-6xl mx-auto ${
									isHovered ? "text-green-400" : ""
								}`}
							/>
							<h1
								className={` text-base font-semibold font-poppins mx-auto  ${
									isHovered ? "frg-text-inv" : "fgr-text"
								}`}>
								NOW PLAYING
							</h1>
						</div>
						<div
							className={`p-2  flex justify-center ${
								isHovered ? "" : "bkg bdr-2"
							}`}>
							<DynamicImage />
						</div>
					</div>
				</div>
				<div>
					<ContactSection />
				</div>
				<div>
					<Footer />
				</div>
			</main>
		</div>
	);
}
