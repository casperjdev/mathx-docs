import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import '@/markdown/styles.css';

export default async function TextPanelContent({ chapter, lesson }: TextPanelProps) {
	const filePath = path.join(process.cwd(), `src/markdown/${chapter}`, `${lesson}.mdx`);
	const fileContents = await fs.promises.readFile(filePath, 'utf8');

	return (
		<div className='h-full overflow-y-scroll pr-4'>
			<MDXRemote source={fileContents} />
		</div>
	);
}
