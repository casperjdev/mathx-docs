import TextPanelContent from '../atoms/TextPanelContent';

export default function TextPanel(path: { chapter: string; lesson: string }) {
	return (
		<article className='w-full h-full max-lg:pl-12 flex flex-col gap-6 divide-neutral-200 text-neutral-500'>
			<TextPanelContent {...path} />
		</article>
	);
}
