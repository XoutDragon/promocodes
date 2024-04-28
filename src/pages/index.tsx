import { SignOutButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Test from './components/test';

export default function Home() {
	return (
		<main className='h-screen'>
			<Test />
		</main>
	);
}
