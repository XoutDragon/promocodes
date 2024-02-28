import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

import { LoginForm } from './components/LoginForm';

export default function Home() {
	return (
		<>
			<main className='grid grid-cols-2 h-full'>
				<Image
					src='/hero.gif'
					width={100}
					height={100}
					alt='hero'
					objectFit='cover'
				/>
				<LoginForm />
			</main>
		</>
	);
}
