import '@/styles/globals.css';
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
} from '@clerk/nextjs';
import type { AppProps } from 'next/app';

import { LoginForm } from './components/LoginForm';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ClerkProvider {...pageProps}>
			<SignedIn>
				<Component {...pageProps} />
			</SignedIn>
			<SignedOut>
				<SignInButton mode='modal'>
					<Button variant='outline'>Sign in</Button>
				</SignInButton>
			</SignedOut>
		</ClerkProvider>
	);
}

export default MyApp;
