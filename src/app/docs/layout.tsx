import Breadcrumbs from '@/components/ui/organisms/Breadcrumbs';
import Sidebar from '@/components/ui/organisms/Sidebar';

export default async function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='w-full h-full max-w-screen-2xl mx-auto pt-6 flex flex-row'>
			<div className='lg:block hidden'>
				<Sidebar />
			</div>
			<div className='w-full h-full flex flex-col overflow-y-scroll break-words p-6'>
				<Breadcrumbs />
				{children}
			</div>
		</main>
	);
}
