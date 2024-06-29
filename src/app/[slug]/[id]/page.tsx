import TextPanel from '@/components/ui/organisms/TextPanel';

export default async function Page({ params }: { params: { slug: string; id: string } }) {
	const { slug, id } = params;
	return <TextPanel chapter={slug} lesson={id} />;
}
