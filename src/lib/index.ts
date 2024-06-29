import { SidebarLessons, SidebarChapters } from '@/constants/objects/lists';
import { redirect } from 'next/navigation';

export function getSidebarListByName(chapter: string) {
	const index = SidebarChapters.indexOf(chapter);
	if (index === -1) {
		redirect('/');
	}
	return SidebarLessons[index];
}

export function normalizeString(str: string) {
	str = str.replace(/-/g, ' ');
	return str.charAt(0).toUpperCase() + str.slice(1);
}
