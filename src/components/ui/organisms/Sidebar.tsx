'use client';

import { MutableRefObject, useRef, useEffect } from 'react';
import { SidebarToggle } from '../atoms/SidebarToggle';
import { SidebarList } from '../molecules/SidebarList';

export default function Sidebar({ chapter }: { chapter: string }) {
	const containerRef: MutableRefObject<HTMLDivElement> = useRef(null!);
	const toggleRef: MutableRefObject<HTMLDivElement> = useRef(null!);
	const listRef: MutableRefObject<HTMLDivElement> = useRef(null!);

	useEffect(() => {
		let active = false;
		containerRef.current.ontouchend = () => {
			if (!active) {
				toggleRef.current.classList.replace('rotate-0', 'rotate-180');
				listRef.current.classList.replace('w-0', 'w-[calc(100svw-1.5rem)]');
			} else {
				toggleRef.current.classList.replace('rotate-180', 'rotate-0');
				listRef.current.classList.replace('w-[calc(100svw-1.5rem)]', 'w-0');
			}
			active = !active;
		};
	});

	return (
		<aside
			ref={containerRef}
			className='lg:static fixed lg:bg-opacity-50 bg-neutral-950 min-w-max h-[calc(100svh-2.5rem)] flex flex-row-reverse justify-center items-center group'>
			<SidebarToggle ref={toggleRef} />
			<SidebarList chapter={chapter} ref={listRef} />
		</aside>
	);
}
