import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/organisms/Navbar';

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
			<body>
				<div className='w-full h-full flex flex-col'>
					<Navbar />
					<div className='h-1 grow'>{children}</div>
				</div>
			</body>
		</html>
	);
}
