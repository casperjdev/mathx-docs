export default function TextPanelContainer({ children }: { children: React.ReactNode }) {
	return <article className='h-full p-4 flex flex-col gap-4 text-neutral-700'>{children}</article>;
}
