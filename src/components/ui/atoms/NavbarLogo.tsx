import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: '300',
	subsets: ['latin'],
});

export default function NavbarLogo() {
	return (
		<a className={poppins.className} href='/'>
			math<b className='font-bold'>x</b>
		</a>
	);
}
