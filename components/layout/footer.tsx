'use client'

import React from 'react'
import Link from 'next/link'
import {
	Mail,
	ArrowUpCircle,
	Facebook,
	Youtube,
	Linkedin,
	Twitter,
	Music,
} from 'lucide-react'
import EmiriLogo from '../common/emiri-logo'

// Data for social links to keep the JSX clean
const socialLinks = [
	{ href: '#', icon: Facebook, label: 'Facebook' },
	{ href: '#', icon: Youtube, label: 'YouTube' },
	{ href: '#', icon: Linkedin, label: 'LinkedIn' },
	{ href: '#', icon: Twitter, label: 'X (formerly Twitter)' },
	{ href: '#', icon: Music, label: 'TikTok' },
]

const Footer = () => {
	const handleScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className='bg-black text-white font-sans'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
				{/* --- Top Section --- */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-10'>
					<div className='space-y-6'>
						<h2 className='text-center md:text-start text-4xl md:text-5xl font-light leading-tight tracking-tight max-w-[548px]'>
							Is there a fascinating project
							<span className='text-gray-400'> brewing in your mind?</span>
						</h2>
					</div>
				</div>
				<div className='flex flex-col gap-y-16 md:flex-row items-center justify-between mt-12'>
					<a
						href='mailto:Info@marcelodesignx.com'
						className='flex items-center gap-4 text-2xl font-semibold group'>
						<Mail className='w-8 h-8 text-white group-hover:text-gray-400 transition-colors' />
						<span>Info@marcelodesignx.com</span>
					</a>

					<nav className='flex items-start flex-wrap gap-x-8 gap-y-10 font-light text-xl'>
						<Link
							href='/about'
							className='hover:text-gray-400 transition-colors'>
							About Us
						</Link>
						<Link
							href='/services'
							className='hover:text-gray-400 transition-colors'>
							Services
						</Link>
						<Link
							href='/contact'
							className='hover:text-gray-400 transition-colors'>
							Contact Us
						</Link>
						<Link
							href='/blog'
							className='hover:text-gray-400 transition-colors'>
							Blog post
						</Link>
					</nav>
				</div>

				{/* divider */}
				<hr className='border-gray-800 my-12 md:my-16' />

				{/* --- Logo Section --- */}
				<div className='my-12 md:my-16'>
					<EmiriLogo className='w-full max-w-5xl mx-auto h-auto text-white' />
				</div>

				{/* dividers */}
				<hr className='border-gray-800 my-12 ' />
				{/* copyrights */}
				<div className='flex items-center justify-center gap-x-6 gap-y-2 text-[11px] md:text-sm text-gray-400'>
					<span>©{new Date().getFullYear()} EMIRI. All rights reserved</span>
					<Link href='/privacy' className='hover:text-white transition-colors'>
						Privacy Policy
					</Link>
					<Link href='/terms' className='hover:text-white transition-colors'>
						Terms & Conditions
					</Link>
				</div>

				{/* --- Bottom Section --- */}
				<div className='flex justify-between items-center gap-8 mt-12'>
					<div className='flex items-start gap-4'>
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								aria-label={social.label}
								className='text-gray-400 hover:text-white transition-colors'>
								<social.icon className='w-5 h-5' />
							</a>
						))}
					</div>

					<button
						onClick={handleScrollTop}
						className='flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group'>
						<span>SCROLL TOP</span>
						<ArrowUpCircle className='w-5 h-5 group-hover:translate-y-[-2px] transition-transform' />
					</button>
				</div>
			</div>
		</footer>
	)
}

export default Footer
