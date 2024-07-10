import { normalizeString } from '@/lib';
import BreadcrumbsSegment from '../atoms/BreadcrumbsSegment';
import { ChevronRightIcon, HomeIcon } from '@/constants/icons';

export default function Breadcrumbs({ chapter, lesson }: { chapter: string; lesson: string }) {
	return (
		<header className='w-full h-4 py-1 px-2 text-ellipsis bg-neutral-700 border-y border-y-neutral-200 text-neutral-200 lg:text-[0.5rem] text-[0.25rem] flex flex-row gap-1 justify-start items-center'>
			<BreadcrumbsSegment text={normalizeString(chapter)} href={`/${chapter}`} />
			<ChevronRightIcon />
			<BreadcrumbsSegment text={normalizeString(lesson)} href={`/${chapter}/${lesson}`} />
		</header>
	);
}
