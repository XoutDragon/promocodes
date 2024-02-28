import { UserButton } from '@clerk/nextjs';
import {} from '@clerk/nextjs';

import { LoginForm } from './components/LoginForm';

export default function Home() {
	return (
		<>
			<main className='grid grid-cols-2 h-full'>
				<div />
				<LoginForm />
			</main>
		</>
	);
}
