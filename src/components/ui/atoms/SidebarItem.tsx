export default function SidebarItem({ item }: { item: string }) {
	return (
		<a
			className='w-full h-6 text-[0.5rem] flex gap-2 justify-end items-center group/item'
			href={item.replace(/\s+/g, '-').toLowerCase()}>
			<span className='bg-neutral-200 min-w-px h-0 group-hover/item:h-3/4 transition-all ease-smooth duration-500'></span>
			<p className='text-neutral-700 group-hover/item:text-neutral-200 transition-colors ease-smooth duration-500'>
				{item}
			</p>
		</a>
	);
}
