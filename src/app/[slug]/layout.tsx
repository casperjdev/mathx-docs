import Sidebar from '@/components/ui/organisms/Sidebar';

export default async function Layout({ params, children }: { params: { slug: string }; children: React.ReactNode }) {
	const { slug } = params;

	return (
		<main className='w-full h-full py-4 flex flex-row'>
			<Sidebar chapter={slug} />
			<span className='min-w-px h-full bg-white m-auto'></span>
			<section className='grow'>{children}</section>
		</main>
	);
}
