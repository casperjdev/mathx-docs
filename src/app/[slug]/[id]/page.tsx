import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import path from 'path';

export default async function Page({ params }: { params: { slug: string; id: string } }) {
	const { slug, id } = params;

	const filePath = path.join(process.cwd(), `src/markdown/${slug}`, `${id}.mdx`);
	const fileContents = await fs.promises.readFile(filePath, 'utf8');

	return (
		<div className='text-neutral-200'>
			<MDXRemote source={fileContents} />
		</div>
	);
}
