import Link from 'next/link';
import React from 'react';
import {
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedin,
	FaSpotify,
} from 'react-icons/fa';

const contactLinks = [
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/nyonges4/?hl=en',
		icon: <FaInstagram />,
		hoverClass: ' hover:text-red-300',
	},
	{
		name: 'Twitter',
		link: 'https://twitter.com/BrianWeloba?t=ep8NFVguQuTLORE5GpSDJg&s=09',
		icon: <FaTwitter />,
		hoverClass: 'hover:text-[#1DA1F2]', // Define Twitter blue color
	},
	{
		name: 'GitHub',
		link: 'https://github.com/Brian-Weloba',
		icon: <FaGithub />,
		hoverClass: 'gh', // Change to the color you prefer
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/brian-weloba-a02000187/',
		icon: <FaLinkedin />,
		hoverClass: 'hover:text-[#0077B5]', // Define LinkedIn blue color
	},
	{
		name: 'Spotify',
		link: 'https://open.spotify.com/user/31cd35kqylcwjxlve5eg4ccnhw4m?si=EiO1kucZQFqmh_V6HDRUjQgit ',
		icon: <FaSpotify />,
		hoverClass: 'hover:text-green-400', // Define your desired hover color
	},
];

export default function ContactSection() {
	return (
		<div className="text-center py-8">
			<div className="flex justify-center space-x-4">
				{contactLinks.map((link, index) => (
					<Link
						key={index}
						href={link.link}
						className={`frg-text cont contact-link transition duration-300 rounded-full flex flex-col items-center ${link.hoverClass}`}
						target="_blank"
						aria-label={link.name}
						rel="noopener noreferrer">
						<span className="text-4xl p-2 ">{link.icon}</span>
					</Link>
				))}
			</div>
		</div>
	);
}
