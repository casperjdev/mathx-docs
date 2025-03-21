import Sidebar from '@/components/ui/organisms/Sidebar';

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='w-full h-full flex flex-col'>
			<main className='w-full max-w-screen-2xl mx-auto h-1 grow pt-6 flex flex-row'>
				<div className='lg:block hidden'>
					<Sidebar />
				</div>
				{children}
			</main>
		</main>
	);
}
