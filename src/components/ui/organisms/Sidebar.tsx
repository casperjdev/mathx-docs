import SidebarContainer from '../molecules/SidebarContainer';
import SidebarItem from '../atoms/SidebarItem';
import { getSidebarListByName } from '@/lib';

export default function Sidebar({ chapter }: { chapter: string }) {
	const currentChapter = getSidebarListByName(chapter);

	return (
		<SidebarContainer>
			{currentChapter.map((item) => {
				return <SidebarItem item={item} />;
			})}
		</SidebarContainer>
	);
}
