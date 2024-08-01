import { normalizeString } from '@/lib';
import { ChevronRightIcon } from '@/constants/icons';
import Link from 'next/link';

export default function Breadcrumbs({ chapter, lesson }: { chapter: string; lesson: string }) {
	return (
		<header className='w-full h-4 px-1 text-ellipsis text-[16px] leading-4 bg-neutral-700 border-y border-y-neutral-200 text-neutral-200 flex flex-row gap-1 justify-start items-center'>
			<Link href={`/${chapter}`} className='min-w-max overflow-hidden whitespace-nowrap text-ellipsis'>
				{normalizeString(chapter)}
			</Link>
			<div className='h-3/5'>
				<ChevronRightIcon />
			</div>
			<Link href={`/${chapter}/${lesson}`} className='overflow-hidden whitespace-nowrap text-ellipsis'>
				{normalizeString(lesson)}
			</Link>
		</header>
	);
}
