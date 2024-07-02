import { ChevronRightIcon, HomeIcon } from '@/constants/icons';
import { normalizeString } from '@/lib';

export default function TextPanelHeader({ chapter, lesson }: TextPanelProps) {
	return (
		<header className='w-max h-3 flex flex-row gap-2 text-[0.5rem] text-nowrap'>
			<a
				className='size-full text-neutral-700 hover:text-neutral-200 transition-colors ease-smooth duration-500'
				href='/'>
				<HomeIcon />
			</a>
			<div className='size-full'>
				<ChevronRightIcon />
			</div>
			<a
				className='text-neutral-700 hover:text-neutral-200 transition-colors ease-smooth duration-500'
				href={`/${chapter}`}>
				{normalizeString(chapter)}
			</a>
			<div className='size-full'>
				<ChevronRightIcon />
			</div>
			<a
				className='text-neutral-700 hover:text-neutral-200 transition-colors ease-smooth duration-500'
				href={`/${chapter}/${lesson}`}>
				{normalizeString(lesson)}
			</a>
		</header>
	);
}
