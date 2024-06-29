import Sidebar from '@/components/ui/organisms/Sidebar';

export default async function Layout({ params, children }: { params: { slug: string }; children: React.ReactNode }) {
	const { slug } = params;

	return (
		<main className='w-full h-svh flex flex-row gap-4 pt-16 pb-8'>
			<Sidebar chapter={slug} />
			<span className='bg-neutral-200 min-w-px h-full m-auto'></span>
			<section className='grow px-4'>{children}</section>
		</main>
	);
}
