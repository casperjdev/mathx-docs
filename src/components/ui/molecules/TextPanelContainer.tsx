export default function TextPanelContainer({ children }: { children: React.ReactNode }) {
	return (
		<article className='w-full h-full p-6 flex flex-col gap-6 divide-neutral-200 text-neutral-500'>{children}</article>
	);
}
