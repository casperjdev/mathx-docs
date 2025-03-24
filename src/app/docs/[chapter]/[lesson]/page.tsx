import TextPanel from '@/components/ui/organisms/TextPanel';
import { course } from '@/constants/objects/lists';
import { slugify } from '@/lib';

export async function generateStaticParams() {
	return course.flatMap((module) =>
		module.items.map((item) => ({
			chapter: slugify(module.title),
			lesson: slugify(item),
		}))
	);
}

export default async function Page({ params }: { params: { chapter: string; lesson: string } }) {
	const { chapter, lesson } = params;
	return <TextPanel src={`/docs/${chapter}/${lesson}`} />;
}
