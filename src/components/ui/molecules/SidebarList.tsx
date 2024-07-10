import { getSidebarListByName } from '@/lib';
import { forwardRef } from 'react';
import SidebarItem from '../atoms/SidebarItem';

export const SidebarList = forwardRef<HTMLDivElement, { chapter: string }>((props, ref) => {
	const currentChapter = getSidebarListByName(props.chapter);

	return (
		<div
			ref={ref}
			className='overflow-x-hidden h-full lg:w-max w-0 max-w-[calc(100svw-1.5rem)] group-hover:w-40 transition-width duration-200 ease-smooth'>
			<div className='min-h-full flex flex-col gap-2 justify-center items-end'>
				{currentChapter.map((item) => {
					return <SidebarItem item={item} />;
				})}
			</div>
		</div>
	);
});
