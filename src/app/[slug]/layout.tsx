import Sidebar from '@/components/ui/organisms/Sidebar';

export default async function Layout({ params, children }: { params: { slug: string }; children: React.ReactNode }) {
	const { slug } = params;

	return (
		<main className='w-full h-full flex flex-row'>
			<Sidebar chapter={slug} />
			<section className='grow'>{children}</section>
		</main>
	);
}
