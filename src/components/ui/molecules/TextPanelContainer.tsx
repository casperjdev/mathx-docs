export default function TextPanelContainer({ children }: { children: React.ReactNode }) {
	return <article className='h-full flex flex-col gap-4 text-neutral-700'>{children}</article>;
}
