import React from 'react';
import { OAuthStrategy } from '@clerk/types';
import { useSignIn } from '@clerk/clerk-react';

import { Button } from '@/components/ui/button';

import { FaFacebook, FaDiscord, FaGoogle } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { LampContainer } from '../../components/ui/lamp';
import Link from 'next/link';

export const LoginForm = () => {
	const { signIn } = useSignIn();

	const signInWith = (strategy: OAuthStrategy) => {
		return signIn!.authenticateWithRedirect({
			strategy,
			redirectUrl: '/sso-callback',
			redirectUrlComplete: '/',
		});
	};
	return (
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
						className='grid grid-flow-row justify-center h-[150%] mx-auto'
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<h2 className='text-5xl font-bold text-center text-white'>
							Sign into{' '}
							<span className='text-xl block font-medium text-sky-300'>
								Promocode Finder
							</span>
						</h2>
						<Button
							variant={'outline'}
							className=' flex justify-between'
							onClick={() => signInWith('oauth_google')}
						>
							<FaGoogle className='text-red-500 w-6 h-6' />
							<span>Sign in with Google</span>
						</Button>
						<Button
							variant={'outline'}
							className=' justify-between'
							onClick={() => signInWith('oauth_facebook')}
						>
							<FaFacebook className='text-blue-500 w-6 h-6' />
							<span>Sign in with Facebook</span>
						</Button>
						<Button
							variant={'outline'}
							className=' justify-between'
							onClick={() => signInWith('oauth_discord')}
						>
							<FaDiscord className='text-blue-700 w-6 h-6' />
							<span>Sign in with Discord</span>
						</Button>
					</form>
					<div>
						<Button variant={'ghost'} className='text-white'>
							<Link href='/tos'>Terms of Service</Link>
						</Button>
						<Button variant={'ghost'} className='text-white'>
							<Link href='/policy'>Privacy Policy</Link>
						</Button>
					</div>
				</motion.h1>
			</LampContainer>
		</div>
	);
};
