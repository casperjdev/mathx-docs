'use client';

import { deslugify } from '@/lib';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Breadcrumbs() {
	const { chapter, lesson } = useParams<{ chapter: string; lesson: string }>();

	if (!chapter) return null;

	return (
		<div className='flex flex-row text-neutral-200 text-2xs'>
			<Link href='/docs'>Home</Link>
			<ChevronRight />
			<Link href={`/docs/${chapter}`}>{deslugify(chapter)}</Link>
			{lesson && (
				<>
					<ChevronRight />
					<Link href={`/docs/${chapter}/${lesson}`}>{deslugify(lesson)}</Link>
				</>
			)}
		</div>
	);
}
