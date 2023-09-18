import React from 'react';
import { DarkModeProvider } from '../context/DarkModeContext';
import Head from 'next/head';

function App({
	Component,
	pageProps,
}: {
	Component: React.ComponentType;
	pageProps: any;
}) {
	return (
		<DarkModeProvider>
			<Head>
				<meta property="og:title" content="Brian Weloba" />
				<meta
					property="description"
					content="Brian Weloba's developer portfolio"
				/>
				<meta
					property="og:description"
					content="Welcome to Brian Weloba's Developer Portfolio. Explore a collection of my coding projects and web applications. I specialize in Full-stack Development and am passionate about creating innovative, user-friendly digital experiences. Dive into my code and see how I turn ideas into reality."
				/>
				<meta
					property="og:url"
					content="https://portfolio.saturdev.tech/"
				/>
			</Head>
			<Component {...pageProps} />
		</DarkModeProvider>
	);
}

export default App;
