/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WvK80W0FyRS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Test() {
	return (
		<>
			<section className='w-full bg-[#393E46]'>
				<UserButton afterSignOutUrl='/' />
				<div className='container px-4 md:px-6 py-12 md:py-20 lg:py-28 xl:py-48 bg-[#393E46]'>
					<div className='grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px]'>
						<img
							alt='Hero'
							className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:order-first lg:order-first lg:aspect-square lg:pl-0'
							height='275'
							src='./hero.gif'
							width='275'
						/>
						<div className='flex flex-col justify-start space-y-4 relative'>
							<div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center rounded-xl opacity-20" />
							<div className='space-y-2 relative z-10'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white'>
									Genshin Impact
								</h1>
								<p className='max-w-[400px] text-gray-200 md:text-xl'>
									Explore our features and learn more about our services.
								</p>
							</div>
							<div className='flex flex-col gap-2 relative z-10'>
								<Button
									className='h-8 w-[48%] text-[#00ADB5] border-[#00ADB5]'
									variant='outline'
								>
									Feature 1
								</Button>
								<Button
									className='h-8 w-[48%] text-[#00ADB5] border-[#00ADB5]'
									variant='outline'
								>
									Feature 2
								</Button>
								<Button
									className='h-8 w-[48%] text-[#00ADB5] border-[#00ADB5]'
									variant='outline'
								>
									Feature 3
								</Button>
								<Button
									className='h-8 w-[48%] text-[#00ADB5] border-[#00ADB5]'
									variant='outline'
								>
									Feature 4
								</Button>
								<Button
									className='h-8 w-[48%] text-[#00ADB5] border-[#00ADB5]'
									variant='outline'
								>
									Feature 5
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer className='bg-white text-[#393E46] px-4 md:px-6 py-6'>
				<div className='container flex flex-col md:flex-row items-center justify-between'>
					<p className='text-sm'>© 2024 Genshin Impact. All rights reserved.</p>
					<div className='flex gap-4 mt-4 md:mt-0'>
						<Link className='text-sm hover:underline' href='#'>
							Terms of Service
						</Link>
						<Link className='text-sm hover:underline' href='#'>
							Privacy Policy
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
