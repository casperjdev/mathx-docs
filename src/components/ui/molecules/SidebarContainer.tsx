'use client';

import { ChevronRightIcon } from '@/constants/icons';
import { MutableRefObject, useEffect, useRef } from 'react';

export default function SidebarContainer({ children }: { children: React.ReactNode }) {
	const toggleRef: MutableRefObject<HTMLDivElement> = useRef(null!);
	const toggleIconRef: MutableRefObject<HTMLDivElement> = useRef(null!);
	const sidebarRef: MutableRefObject<HTMLDivElement> = useRef(null!);

	useEffect(() => {
		let active = false;
		toggleRef.current.ontouchend = () => {
			if (!active) {
				toggleIconRef.current.classList.replace('rotate-0', 'rotate-180');
				sidebarRef.current.classList.replace('w-0', 'w-40');
			} else {
				toggleIconRef.current.classList.replace('rotate-180', 'rotate-0');
				sidebarRef.current.classList.replace('w-40', 'w-0');
			}
			active = !active;
		};
	});

	return (
		<aside className='lg:static fixed min-w-max h-[calc(100svh-1.5rem)] flex flex-row-reverse justify-center items-center group'>
			<div ref={toggleRef} className='w-6 h-full lg:[display:none] grid place-items-center text-neutral-200'>
				<div
					ref={toggleIconRef}
					className='size-4 rotate-0 group-hover:rotate-180 transition-transform duration-200 ease-smooth'>
					<ChevronRightIcon />
				</div>
			</div>
			<div
				ref={sidebarRef}
				className='bg-neutral-900 overflow-x-hidden h-full lg:w-max w-0 group-hover:w-40 transition-width duration-200 ease-smooth overflow-y-scroll flex flex-col justify-center'>
				{children}
			</div>
		</aside>
	);
}
