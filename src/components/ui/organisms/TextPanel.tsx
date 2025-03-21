import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import mdxComponents from '@/mdx-components';

export default async function TextPanel({ chapter, lesson }: { chapter: string; lesson: string }) {
	const filePath = path.join(process.cwd(), `src/markdown/${chapter}`, `${lesson}.mdx`);
	const fileContents = await fs.promises.readFile(filePath, 'utf8');

	return (
		<article className='w-full h-full overflow-y-scroll break-words px-6'>
			<MDXRemote components={mdxComponents} source={fileContents} />
		</article>
	);
}
