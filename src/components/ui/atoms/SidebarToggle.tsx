import { ChevronRightIcon } from '@/constants/icons';
import { forwardRef } from 'react';

export const SidebarToggle = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div className='w-6 h-full lg:[display:none] grid place-items-center text-neutral-200'>
			<div ref={ref} className='size-4 rotate-0 group-hover:rotate-180 transition-transform duration-200 ease-smooth'>
				<ChevronRightIcon />
			</div>
		</div>
	);
});
