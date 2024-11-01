import { SidebarChapters } from '@/constants/objects/lists';
import Sidebar from './Sidebar';

export default function MobileMenu({ open }: { open: boolean }) {
	return (
		<div
			className={`${
				open ? 'w-40' : 'w-0'
			} lg:hidden fixed overflow-hidden h-[calc(100svh-2.5rem)] top-10 bg-black z-50 transition-all ease-smooth duration-200`}>
			{SidebarChapters.map((chapter) => (
				<Sidebar chapter={chapter} />
			))}
		</div>
	);
}
