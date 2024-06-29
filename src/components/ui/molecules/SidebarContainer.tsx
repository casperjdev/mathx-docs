export default function SidebarContainer({ children }: { children: React.ReactNode }) {
	return (
		<aside className='min-w-36 h-full pr-4 overflow-y-scroll grid place-items-center'>
			<div className='w-full h-max flex flex-col'>{children}</div>
		</aside>
	);
}
