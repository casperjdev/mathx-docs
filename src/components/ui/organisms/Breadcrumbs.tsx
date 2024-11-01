'use client';

import { normalizeString } from '@/lib';
import { ChevronRightIcon } from '@/constants/icons';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenuToggle from '../atoms/MobileMenuToggle';
import MobileMenu from './MobileMenu';

export default function Breadcrumbs({ chapter, lesson }: { chapter: string; lesson: string }) {
	const [open, setOpen] = useState(false);

	return (
		<header className='w-full fixed top-6 h-4 text-ellipsis text-[16px] leading-4 bg-neutral-700 border-b border-b-neutral-200 text-neutral-200 flex flex-row justify-start items-center'>
			<MobileMenuToggle open={open} onClick={setOpen} />
			<Link
				href={`/${chapter}/introduction`}
				className='min-w-max overflow-hidden whitespace-nowrap text-ellipsis px-1'>
				{normalizeString(chapter)}
			</Link>
			<div className='h-full p-0.5'>
				<ChevronRightIcon />
			</div>
			<Link
				href={`/${chapter}/${lesson}`}
				className='overflow-hidden whitespace-nowrap text-ellipsis px-1'>
				{normalizeString(lesson)}
			</Link>
			<MobileMenu open={open} />
		</header>
	);
}
