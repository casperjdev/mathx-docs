import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import mdxComponents from '@/mdx-components';

export default async function TextPanel({ src }: { src: string }) {
	const filePath = path.join(process.cwd(), `src/content${src}.mdx`);
	const fileContents = await fs.promises.readFile(filePath, 'utf8');

	return <MDXRemote components={mdxComponents} source={fileContents} />;
}
