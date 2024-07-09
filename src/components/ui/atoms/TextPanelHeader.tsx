import { ChevronRightIcon, HomeIcon } from '@/constants/icons';
import { normalizeString } from '@/lib';

export default function TextPanelHeader({ chapter, lesson }: TextPanelProps) {
	return (
		<header className='w-full h-6 py-1 overflow-x-scroll overflow-y-hidden'>
			<div className='h-4 flex flex-row justify-start items-center gap-1 text-xs text-nowrap'>
				<a
					className='min-w-4 size-4 text-neutral-500 hover:text-neutral-200 transition-colors ease-smooth duration-500'
					href='/'>
					<HomeIcon />
				</a>
				<div className='min-w-4 size-4'>
					<ChevronRightIcon />
				</div>
				<a
					className='text-neutral-500 hover:text-neutral-200 transition-colors ease-smooth duration-500'
					href={`/${chapter}`}>
					{normalizeString(chapter)}
				</a>
				<div className='min-w-4 size-4'>
					<ChevronRightIcon />
				</div>
				<a
					className='text-neutral-500 hover:text-neutral-200 transition-colors ease-smooth duration-500'
					href={`/${chapter}/${lesson}`}>
					{normalizeString(lesson)}
				</a>
			</div>
		</header>
	);
}
