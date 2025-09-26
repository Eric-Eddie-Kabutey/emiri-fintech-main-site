import { PlatformFeature } from '@/types/platform-features-type'

export const features: PlatformFeature[] = [
	{
        icon: "/assets/icons/icon-bitcoin.svg",
		title: 'Cryptocurrencies',
		description:
			'Securely custody and manage the widest range of cryptocurrencies including staking and DeFi',
		href: '/cryptocurrencies',
	},
	{
        icon: "/assets/icons/icon-dolar.svg",
		title: 'Tokenized assets',
		description:
			'Digitize and tokenize any type of assets, securities on any standard, including NFTs',
		href: '/tokenized-assets',
	},
	{
        icon: "/assets/icons/icon-signature.svg",
		title: 'Stablecoins',
		description:
			'Digitally issue, book and transfer any stable coin or digital currencies and optimize your settlement process',
		href: '/stablecoins',
	},
]
