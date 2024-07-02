import { ChevronRightIcon } from '@/constants/icons';

export default function SidebarContainer({ children }: { children: React.ReactNode }) {
	return (
		<aside className='bg-neutral-950 lg:static fixed min-w-max h-[calc(100svh-1.5rem)] flex flex-row-reverse justify-center items-center group'>
			<div className='w-8 h-full border-r border-white lg:[display:none] grid place-items-center text-neutral-200'>
				<div className='size-4 group-hover:rotate-180 transition-transform duration-200 ease-smooth'>
					<ChevronRightIcon />
				</div>
			</div>
			<div className='overflow-x-hidden lg:w-max w-0 group-hover:w-40 transition-width duration-200 ease-smooth h-auto overflow-y-scroll flex flex-col'>
				{children}
			</div>
		</aside>
	);
}
