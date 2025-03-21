'use client';

import SidebarChapter from '../atoms/SidebarChapter';
import SidebarLesson from '../atoms/SidebarLesson';
import { Module } from '@/constants/types';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { slugify } from '@/lib';
import { usePathname } from 'next/navigation';

export default function SidebarDropdown({ module }: { module: Module }) {
	const path = usePathname();
	const current = path.includes(`/docs/${slugify(module.chapter)}`);

	const container = useRef<HTMLDivElement>(null!);

	const [open, setOpen] = useState(current);

	useLayoutEffect(() => {
		if (open) {
			container.current.style.height = `${container.current.scrollHeight}px`;
		} else {
			container.current.style.height = `56px`;
		}
	}, [open]);

	useLayoutEffect(() => {
		setTimeout(() => {
			container.current.classList.add('transition-height', 'duration-200', 'ease-smooth');
		}, 100);
	}, []);

	return (
		<div
			ref={container}
			className={`overflow-hidden flex flex-col shrink-0`}
			style={{ height: '56px' }}>
			<SidebarChapter onClick={() => setOpen(!open)} open={open} chapter={module.chapter} />
			<div className='flex flex-col gap-2'>
				{module.lessons.map((lesson, index) => (
					<SidebarLesson key={index} chapter={module.chapter} lesson={lesson} />
				))}
			</div>
		</div>
	);
}
