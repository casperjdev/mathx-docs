import { SidebarLists, SidebarChapters } from '@/constants/objects/SidebarLists';
import { redirect } from 'next/navigation';

export function getSidebarListByName(chapter: string) {
	const index = SidebarChapters.indexOf(chapter);
	if (index === -1) {
		redirect('/');
	}
	return SidebarLists[index];
}
