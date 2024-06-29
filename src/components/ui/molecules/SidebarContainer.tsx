export default function SidebarContainer({ children }: { children: React.ReactNode }) {
	return <aside className='w-32 h-full flex flex-col justify-evenly items-center text-neutral-200'>{children}</aside>;
}
