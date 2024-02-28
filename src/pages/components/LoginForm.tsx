import React from 'react';
import { OAuthStrategy } from '@clerk/types';
import {
	ClerkProvider,
	ClerkLoaded,
	AuthenticateWithRedirectCallback,
	UserButton,
	useSignIn,
} from '@clerk/clerk-react';

import { BrowserRouter, Route } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';

import { FaFacebook, FaDiscord, FaGoogle } from 'react-icons/fa';

export const LoginForm = () => {
	return (
		<>
			<SignedOut>
				<SignInOAuthButtons />
			</SignedOut>
			<SignedIn>
				<UserButton afterSignOutUrl='/' />
			</SignedIn>
		</>
	);
};

function SignInOAuthButtons() {
	const { signIn } = useSignIn();

	const signInWith = (strategy: OAuthStrategy) => {
		return signIn!.authenticateWithRedirect({
			strategy,
			redirectUrl: '/sso-callback',
			redirectUrlComplete: '/',
		});
	};

	// Render a button for each supported OAuth provider
	// you want to add to your app
	return (
		<>
			<form className={`grid grid-flow-row gap-y-5`}>
				<Button variant={'outline'} className='w-52 flex justify-between'>
					<FaGoogle />
					<span>Sign in with Google</span>
				</Button>
				<Button variant={'outline'} className='w-52 justify-between'>
					<FaFacebook />
					<span>Sign in with Facebook</span>
				</Button>
				<Button variant={'outline'} className='w-52 justify-between'>
					<FaDiscord />
					<span>Sign in with Discord</span>
				</Button>
			</form>
		</>
	);
}
