import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'mathx Docs',
	description: 'Documentation related to mathematics and the mathx app.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
