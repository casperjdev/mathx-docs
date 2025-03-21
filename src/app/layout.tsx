import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/organisms/Navbar';
import { Golos_Text } from 'next/font/google';

const golosText = Golos_Text({
	weight: ['400', '600'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'mathx | The Math Learning Platform',
	description: `
    Built with the intention of making math accessible to everyone, 
    mathx is a platform for learning mathematics in a concise, organized way.
  `,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={golosText.className}>
			<body>
				<div className='w-full h-full flex flex-col'>
					<Navbar />
					<div className='h-1 grow'>{children}</div>
				</div>
			</body>
		</html>
	);
}
