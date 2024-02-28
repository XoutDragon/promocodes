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

import { motion } from 'framer-motion';
import { LampContainer } from '../../components/ui/lamp';

export const LoginForm = () => {
	return (
		<>
			<SignedOut>
				<div className='bg-black h-screen'>
					<LampContainer>
						<motion.h1
							initial={{ opacity: 0.5, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.3,
								duration: 0.8,
								ease: 'easeInOut',
							}}
							className='mt-16'
						>
							<form
								className={`grid grid-flow-row justify-center h-[150%] mx-auto `}
							>
								<h2 className='text-5xl font-bold text-center text-white'>
									Sign in with
								</h2>
								<SignInOAuthButtons />
							</form>
						</motion.h1>
					</LampContainer>
				</div>
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
			<Button variant={'outline'} className=' flex justify-between'>
				<FaGoogle />
				<span>Sign in with Google</span>
			</Button>
			<Button variant={'outline'} className=' justify-between'>
				<FaFacebook />
				<span>Sign in with Facebook</span>
			</Button>
			<Button variant={'outline'} className=' justify-between'>
				<FaDiscord />
				<span>Sign in with Discord</span>
			</Button>
		</>
	);
}
