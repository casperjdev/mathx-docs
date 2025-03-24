import TextPanel from '@/components/ui/organisms/TextPanel';
import { course } from '@/constants/objects/lists';
import { slugify } from '@/lib';

export async function generateStaticParams() {
	return course.flatMap((module) => ({
		chapter: slugify(module.title),
	}));
}

export default async function Page({ params }: { params: { chapter: string } }) {
	const { chapter } = params;
	return <TextPanel src={`/docs/${chapter}/index`} />;
}
