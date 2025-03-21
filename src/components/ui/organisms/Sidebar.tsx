import { course } from '@/constants/objects/lists';
import SidebarDropdown from '../molecules/SidebarDropdown';

export default function Sidebar() {
	return (
		<aside className='h-full pb-12 flex overflow-x-hidden overflow-y-auto bg-opacity-50 bg-neutral-950 min-w-max flex-col justify-start'>
			{course.map((module, index) => (
				<SidebarDropdown key={index} module={module} />
			))}
		</aside>
	);
}
