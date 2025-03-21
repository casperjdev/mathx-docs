import Sidebar from '@/components/ui/organisms/Sidebar';
import TextPanel from '@/components/ui/organisms/TextPanel';
import { course } from '@/constants/objects/lists';
import { slugify } from '@/lib';

export async function generateStaticParams() {
	return course.flatMap((module) =>
		module.lessons.map((lesson) => ({
			chapter: slugify(module.chapter),
			lesson: slugify(lesson),
		}))
	);
}

export default async function Page({ params }: { params: { chapter: string; lesson: string } }) {
	const { chapter, lesson } = params;
	return <TextPanel chapter={chapter} lesson={lesson} />;
}
