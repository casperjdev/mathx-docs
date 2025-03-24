'use client';

import { slugify } from '@/lib';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarItem({ dropdown, name }: { dropdown: string; name: string }) {
	const path = usePathname();
	const isCurrent = path.split('/')[3] === slugify(name);

	return (
		<Link
			className='w-40 flex flex-row shrink-0 gap-2 justify-start items-center px-2 text-2xs group/item'
			href={`/docs/${slugify(dropdown)}/${slugify(name)}`}
			scroll={false}>
			<span className='bg-neutral-200 min-w-px w-px shrink-0 h-0 group-hover/item:h-3/4 transition-all ease-smooth duration-500'></span>
			<p
				className={`${
					isCurrent ? 'text-neutral-200' : 'text-neutral-500'
				} group-hover/item:text-neutral-200 transition-colors ease-smooth duration-500`}>
				{name}
			</p>
		</Link>
	);
}
