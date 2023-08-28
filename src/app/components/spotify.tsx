import React, { useState, useEffect } from "react";

function DynamicImage() {
	const [imageSrc, setImageSrc] = useState(
		"https://now-playing-sooty.vercel.app/now-playing"
	);

	useEffect(() => {
		const interval = setInterval(() => {
			// Generate a timestamp to force the browser to reload the image
			const timestamp = new Date().getTime();
			setImageSrc(
				`https://now-playing-sooty.vercel.app/now-playing?timestamp=${timestamp}`
			);
		}, 60000); // Refresh every minute (60000 milliseconds)

		// Clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, []); // The empty dependency array ensures this effect runs only once

	// eslint-disable-next-line @next/next/no-img-element
	return <img src={imageSrc} alt="Dynamic Image" />;
}

export default DynamicImage;
