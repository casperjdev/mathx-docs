import Sidebar from '@/components/ui/organisms/Sidebar';

export default async function Layout({ params, children }: { params: { slug: string }; children: React.ReactNode }) {
	const { slug } = params;

	return (
		<main className='flex flex-row'>
			<Sidebar chapter={slug} />
			<section>{children}</section>
		</main>
	);
}
