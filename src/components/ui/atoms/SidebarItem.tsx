export default function SidebarItem({ item }: { item: string }) {
	return (
		<a className='w-full h-8' href={item.replace(/\s+/g, '-').toLowerCase()}>
			{item}
		</a>
	);
}
