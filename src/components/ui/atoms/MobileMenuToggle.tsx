import { MobileMenuToggleProps } from '@/constants/types';
import { Menu, X } from 'lucide-react';

export default function MobileMenuToggle({ open, onClick }: MobileMenuToggleProps) {
	return (
		<button onClick={() => onClick(!open)} className='h-full lg:hidden block'>
			{open ? <X /> : <Menu />}
		</button>
	);
}
