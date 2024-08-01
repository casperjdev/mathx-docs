import Sidebar from '@/components/ui/organisms/Sidebar';
import TextPanel from '@/components/ui/organisms/TextPanel';

export default async function Page({ params }: { params: { slug: string; id: string } }) {
	const { slug, id } = params;
	return (
		<main className='w-full max-w-screen-2xl mx-auto h-1 grow flex flex-row gap-6'>
			<Sidebar chapter={slug} />
			<TextPanel chapter={slug} lesson={id} />
		</main>
	);
}
