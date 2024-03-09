import { Metadata, Viewport } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';

// Inside your component
export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};
export const metadata: Metadata = {
	title: 'Jobify Dev',
	description: 'Job application tracking system for job hunters',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html
				lang='en'
				suppressHydrationWarning>
				<body className={inter.className}>
					<Providers>{children}</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
