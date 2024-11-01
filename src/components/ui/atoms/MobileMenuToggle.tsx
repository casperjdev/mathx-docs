import { ThreeBarsIcon, XIcon } from '@/constants/icons';
import { MobileMenuToggleProps } from '@/constants/types';

export default function MobileMenuToggle({ open, onClick }: MobileMenuToggleProps) {
	return (
		<button
			onClick={() => onClick(!open)}
			className='h-full p-0.5 lg:hidden block border-r border-r-neutral-200'>
			{open ? <XIcon /> : <ThreeBarsIcon />}
		</button>
	);
}
