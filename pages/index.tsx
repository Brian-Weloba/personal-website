'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import profilePic from '../public/brian-weloba.jpg';
import DynamicImage from '../components/spotify';
import WorkSection from '../components/work';
import Projects from '../components/projects';
import EducationSection from '../components/education';
import Footer from '../components/footer';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import ContactSection from '../components/contact';
import Skills from '../components/skills';
import { FaSpotify } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';
import '../styles/globals.css';
import Head from 'next/head';

interface Skill {
	name: string;
	level: string;
	points: number;
	progress: number;
}

export default function Home() {
	const [activeTab, setActiveTab] = useState('frontend');
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const [skills, setSkills] = useState<{ [key: string]: Skill }>({
		frontend: {
			name: 'Front-End Development',
			level: 'Intermediate',
			points: 20,
			progress: 60, // Progress in percentage
		},
		backend: {
			name: 'Back-End Development',
			level: 'Beginner',
			points: 10,
			progress: 30,
		},
		art: {
			name: 'Digital Art',
			level: 'Advanced',
			points: 30,
			progress: 90,
		},
	});

	const { darkMode, toggleDarkMode } = useDarkMode();

	useEffect(() => {
		const root = document.documentElement;
		if (darkMode) {
			root.style.setProperty('--foreground-rgb', '255, 255, 255');
			root.style.setProperty('--background-start-rgb', '41, 36, 35');
			root.style.setProperty('--background-end-rgb', '0, 0, 0');
		} else {
			root.style.setProperty('--foreground-rgb', '0, 0, 0');
			root.style.setProperty('--background-start-rgb', '214, 219, 220');
			root.style.setProperty('--background-end-rgb', '255, 255, 255');
		}
	}, [darkMode]);

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	useEffect(() => {
		const scrollingTextElement = document.querySelector('.scrolling-text');
		if (scrollingTextElement) {
			scrollingTextElement.classList.add('animate-scroll');
		}
	}, []);

	const handleClick = () => {
		window.location.href =
			'https://now-playing-sooty.vercel.app/now-playing?open';
	};

	return (
		<div className="flex h-screen">
			<Head>
				<title>Home</title>
			</Head>
			{/* Sidebar */}
			<aside className="hidden md:flex w-fit h-screen px-2 mx-auto bkg border-r-2 bdr flex-col justify-between">
				<div
					className="text-white cursor-pointer mt-4 p-2 bkg-inv rounded-full"
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
				<nav className="fixed md:relative w-full z-50 bkg p-4 border-b-2 bdr">
					<div className="container mx-auto">
						<div className="flex justify-between items-center">
							<div className="text-2xl">
								<p className="font-thin font-jost">
									<span className="font-extrabold">
										brian
									</span>
									weloba
								</p>
							</div>
							<div
								className="text-white md:hidden cursor-pointer p-2 bkg-inv rounded-full"
								onClick={toggleDarkMode}>
								{darkMode ? (
									<SunIcon className="w-8 h-8 frg-text-inv" />
								) : (
									<MoonIcon className="w-8 h-8 frg-text-inv" />
								)}
							</div>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<div className=" mt-20 md:mt-0 py-4 border-b-2 bdr">
					<div className="h-fit py-2 md:py-4 mx-auto overflow-hidden">
						{/* Add the scrolling text */}
						<div className="mx-auto text-3xl md:text-5xl">
							<div
								className="scrolling-text animate-scroll font-jost"
								style={{ whiteSpace: 'nowrap' }}>
								Scrolling Tagline: Because Life&apos;s Too Short
								for Static Text!
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row h-fit">
					<div className="p-10 md:p-4 bdr md:border-b-2">
						<Image
							className="border-2 bdr rounded-lg"
							src={profilePic}
							alt="Picture of the author"
							priority
						/>
					</div>
					<div className=" border-l-0 md:border-l-2 border-b-2 bdr h-auto p-4 md:p-8 text-base md:text-xl  font-poppins text-center">
						<h1 className="font-extrabold font-archivo">
							CTRL+ART+DELIGHT! 😄🎨🔧
						</h1>
						A{' '}
						<span className="hlgt hover:no-underline font-black cursor-pointer">
							SOFTWARE ENGINEER
						</span>{' '}
						BY DAY, AN{' '}
						<span className="hlgt hover:no-underline font-black cursor-pointer">
							ILLUSTRATOR
						</span>{' '}
						BY NIGHT, AND A GENERAL TINKERER AT ALL HOURS, I&apos;VE
						GOT QUITE THE STORY TO TELL. CURIOUS TO KNOW MORE ABOUT
						THE PERSON BEHIND THE PIXELS AND THE PUNS? LET&apos;S
						DIVE INTO THE TECHNICOLOR WORLD OF ME!
					</div>
				</div>
				<div className="h-fit mt-8 md:mx-4">
					<div className="flex font-poppins font-bold">
						<div
							onClick={() => handleTabChange('frontend')}
							className={`w-1/3 py-4 border-t-2 border-l-2 border-r-2 rounded-t-xl justify-center cursor-pointer flex ${
								activeTab === 'frontend'
									? 'active-tab'
									: 'inactive-tab'
							}`}>
							FRONT-END
						</div>
						<div
							onClick={() => handleTabChange('backend')}
							className={`w-1/3 py-4 border-t-2 border-l-2 border-r-2 rounded-t-xl bdr justify-center cursor-pointer flex ${
								activeTab === 'backend'
									? 'active-tab'
									: 'inactive-tab'
							}`}>
							BACK-END
						</div>
						<div
							onClick={() => handleTabChange('software')}
							className={`w-1/3 py-4 border-t-2 border-l-2 border-r-2 rounded-t-xl bdr justify-center flex cursor-pointer ${
								activeTab === 'software'
									? 'active-tab'
									: 'inactive-tab'
							}`}>
							SOFTWARE
						</div>
					</div>
					<div className="h-full bg-transparent p-2 md:p-8 bdr border-x-2">
						<div className="h-fit bkgfrg-text">
							<Skills category={activeTab} />
						</div>
					</div>
				</div>
				<div>
					<div className="text-3xl md:text-5xl capitalize font-jost font-thin py-2 md:py-4 pl-2 md:pl-4 bdr border-t-2 border-b-2">
						WORK EXPERIENCE
					</div>
					<WorkSection />
				</div>
				<div>
					<div className="text-3xl md:text-5xl capitalize font-jost font-thin py-2 md:py-4 pl-4 bdr border-t-2 border-b-2">
						EDUCATION
					</div>
					<EducationSection />
				</div>
				<div>
					<div className="text-3xl md:text-5xl capitalize font-jost font-thin py-2 md:py-4 pl-4 bdr border-t-2 border-b-2">
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
							isHovered ? 'bdr-inv' : 'bdr'
						}`}>
						<div
							className={`h-auto flex flex-col justify-around  p-4 ${
								isHovered ? 'bkg-inv' : 'bkg'
							}`}>
							<FaSpotify
								className={`text-6xl mx-auto ${
									isHovered ? 'text-green-400' : ''
								}`}
							/>
							<h1
								className={` text-base text-center font-semibold font-poppins mx-auto  ${
									isHovered ? 'frg-text-inv' : 'fgr-text'
								}`}>
								NOW PLAYING
							</h1>
						</div>
						<div
							className={`p-2  flex justify-center ${
								isHovered ? '' : 'bkg bdr-2'
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
