import React from "react";
import {
	FaSpotify, // Replace with your Spotify icon
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import DynamicImage from "./spotify";

const VibeWithMe = () => {
	return (
		<section className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 text-white">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-6">Vibe with Me</h2>

				{/* Spotify Now Playing */}
				

				{/* Social Media Links */}
				<div className="flex justify-center space-x-4">
					<a
						href="https://www.instagram.com/your-instagram"
						target="_blank"
						rel="noopener noreferrer">
						<FaInstagram className="text-4xl hover:text-pink-300" />
					</a>
					<a
						href="https://www.twitter.com/your-twitter"
						target="_blank"
						rel="noopener noreferrer">
						<FaTwitter className="text-4xl hover:text-blue-400" />
					</a>
					<a
						href="https://www.github.com/your-github"
						target="_blank"
						rel="noopener noreferrer">
						<FaGithub className="text-4xl hover:text-gray-300" />
					</a>
					<a
						href="https://www.linkedin.com/in/your-linkedin"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin className="text-4xl hover:text-blue-600" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default VibeWithMe;
