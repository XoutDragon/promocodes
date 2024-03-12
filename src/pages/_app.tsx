import '@/styles/globals.css';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs';
import type { AppProps } from 'next/app';

import { LoginForm } from './components/LoginForm';

import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider {...pageProps}>
			<SignedIn>
				<Component {...pageProps} />
			</SignedIn>
			<SignedOut>
				<div className='md:grid grid-cols-2 w-full h-full'>
					<div className='relative hidden md:block'>
						<Image
							className='object-cover w-full h-full'
							src='/R.gif'
							fill
							alt='hero'
						/>
					</div>
					<LoginForm />
				</div>
			</SignedOut>
		</ClerkProvider>
	);
}

export default MyApp;
