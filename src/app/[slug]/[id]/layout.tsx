import Breadcrumbs from '@/components/ui/organisms/Breadcrumbs';

export default async function Layout({
	params,
	children,
}: {
	params: { slug: string; id: string };
	children: React.ReactNode;
}) {
	const { slug, id } = params;

	return (
		<main className='w-full h-full flex flex-col'>
			<Breadcrumbs chapter={slug} lesson={id} />
			{children}
		</main>
	);
}
