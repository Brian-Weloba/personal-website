// pages/_document.js (or _document.tsx if using TypeScript)
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/icon-192x192.png" />
					<link
						rel="shortcut icon"
						type="image/x-icon"
						href="/icon-32x32.png"
					/>

					<meta name="theme-color" content="#292423" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
