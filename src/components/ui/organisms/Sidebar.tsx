import { getSidebarListByName, normalizeString } from '@/lib';
import SidebarItem from '../atoms/SidebarItem';

export default function Sidebar({ chapter }: { chapter: string }) {
	const currentChapter = getSidebarListByName(chapter);

	return (
		<aside className='h-full py-2 flex overflow-x-hidden bg-opacity-50 bg-neutral-950 min-w-max gap-1 flex-col justify-start'>
			<h1 className='w-40 text-sm px-2 text-neutral-200'>{normalizeString(chapter)}</h1>
			{currentChapter.map((item) => (
				<SidebarItem item={item} />
			))}
		</aside>
	);
}
