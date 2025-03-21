import Sidebar from './Sidebar';

export default function MobileMenu({ open }: { open: boolean }) {
	return (
		<div
			className={`${
				open ? 'w-40' : 'w-0'
			} lg:hidden fixed left-0 top-6 overflow-hidden h-[calc(100svh-1.5rem)] bg-black z-50 transition-all ease-smooth duration-200`}>
			<Sidebar />
		</div>
	);
}
