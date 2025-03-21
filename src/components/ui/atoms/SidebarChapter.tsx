'use client';

import { slugify } from '@/lib';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

export default function SidebarChapter({
	chapter,
	open,
	onClick,
}: {
	chapter: string;
	open: boolean;
	onClick: Dispatch<SetStateAction<boolean>>;
}) {
	const pathname = usePathname();
	const isCurrent = pathname.split('/')[2] === slugify(chapter);
	const linkHref = `/docs/${slugify(chapter)}/introduction`;

	const handleClick = () => {
		if (!open || pathname === linkHref) {
			onClick(!open);
		}
	};

	return (
		<Link
			href={linkHref}
			className={`${
				isCurrent ? 'text-neutral-200' : 'text-neutral-500'
			} w-40 h-7 flex items-center justify-between text-2xs p-2 hover:text-neutral-200 transition-colors ease-smooth duration-500`}
			onClick={() => handleClick()}>
			<div>{chapter}</div>
			<ChevronRight
				className={`${
					open ? 'rotate-90' : 'rotate-0'
				} transition-transform duration-200 ease-smooth`}
			/>
		</Link>
	);
}
