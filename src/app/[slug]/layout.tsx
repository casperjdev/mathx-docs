import Sidebar from '@/components/ui/organisms/Sidebar';

export default async function Layout({ params, children }: { params: { slug: string }; children: React.ReactNode }) {
	const { slug } = params;

	return (
		<main className='w-full h-full flex flex-row gap-4'>
			<Sidebar chapter={slug} />
			<section className='grow lg:pl-0 pl-8 border-l border-neutral-200'>{children}</section>
		</main>
	);
}
