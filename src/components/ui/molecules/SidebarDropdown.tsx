'use client';

import SidebarToggle from '../atoms/SidebarToggle';
import SidebarItem from '../atoms/SidebarItem';
import { Module } from '@/constants/types';
import { useLayoutEffect, useRef, useState } from 'react';
import { slugify } from '@/lib';
import { usePathname } from 'next/navigation';

export default function SidebarDropdown({ module }: { module: Module }) {
	const path = usePathname();
	const current = path.includes(`/docs/${slugify(module.title)}`);

	const container = useRef<HTMLDivElement>(null!);

	const [open, setOpen] = useState(current);

	useLayoutEffect(() => {
		if (container.current) {
			container.current.style.height = open ? `${container.current.scrollHeight}px` : '56px';
		}
	}, []);

	return (
		<div
			ref={container}
			className='overflow-hidden flex flex-col shrink-0 transition-height duration-200 ease-smooth'
			style={{
				height: open ? container.current && `${container.current.scrollHeight}px` : '56px',
			}}>
			<SidebarToggle onClick={() => setOpen(!open)} open={open} name={module.title} />
			<div className='flex flex-col gap-2'>
				{module.items.map((item, index) => (
					<SidebarItem key={index} dropdown={module.title} name={item} />
				))}
			</div>
		</div>
	);
}
