'use client';

import { deslugify } from '@/lib';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenuToggle from '../atoms/MobileMenuToggle';
import MobileMenu from './MobileMenu';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ chapter, lesson }: { chapter: string; lesson: string }) {
	const [open, setOpen] = useState(false);

	return (
		<header className='w-full fixed top-6 h-4 text-ellipsis text-[16px] bg-neutral-700 border-b border-b-neutral-500 text-neutral-200 flex flex-row justify-start items-center'>
			<MobileMenuToggle open={open} onClick={setOpen} />
			<Link
				href={`/docs/${chapter}/introduction`}
				className='min-w-max overflow-hidden whitespace-nowrap text-ellipsis px-1'>
				{deslugify(chapter)}
			</Link>
			<div className='h-full p-0.5'>
				<ChevronRight />
			</div>
			<Link
				href={`/docs/${chapter}/${lesson}`}
				className='overflow-hidden whitespace-nowrap text-ellipsis px-1'>
				{deslugify(lesson)}
			</Link>
			<MobileMenu open={open} />
		</header>
	);
}
