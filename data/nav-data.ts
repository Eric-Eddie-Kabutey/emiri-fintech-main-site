import { NavItem } from '@/types/nav-types'
// Import other icons...

export const navigationItems: NavItem[] = [
	{
		label: 'Who We Are',
		href: '#',
		// This item has ONE main column, which contains a grid of links.
		megaMenuContent: [
			{
				title: 'The Taurus Platform',
				description:
					'Issue, book, transfer and trade any digital asset with one fully integrated and modular platform',
				linkLayout: 'grid', // This tells our component to render links in a grid
				links: [
					{
						icon: '',
						title: 'Taurus-PROTECT',
						description: 'Hot, warm and cold custody platform >',
						href: '/protect',
					},
					{
						icon: '',
						title: 'Taurus-EXPLORER',
						description: 'SaaS blockchain connectivity and indexing',
						href: '/explorer',
					},
					{
						icon: '',
						title: 'Taurus-CAPITAL',
						description: 'Digital issuance and tokenization platform >',
						href: '/capital',
					},
					{
						icon: '',
						title: 'Taurus-PRIME',
						description: 'Institutional-grade trading platform >',
						href: '/prime',
					},
				],
			},
			// This is the second column for the Platform dropdown
			{
				title: 'How we work',
				description:
					'We master internally the full technology stack: execute fast, stay at the forefront of innovation',
				linkLayout: 'list',
				links: [
					{
						title: 'Why Taurus',
						description: 'Build your digital asset strategic advantage >',
						href: '/why-taurus',
					},
					{
						title: 'Getting started',
						description: 'Rapid integration and flexible deployment >',
						href: '/getting-started',
					},
				],
			},
		],
	},
	{
		label: 'About Us',
		href: '#',
		// This item has TWO columns, each with a list of links.
		megaMenuContent: [
			{
				title: 'Use cases',
				description:
					'Unlock 3 fundamental business activities: integrate and manage any digital asset',
				linkLayout: 'list',
				links: [
					{
						title: 'Cryptocurrencies',
						description: 'Custody, stake and manage crypto incl. NFT >',
						href: '/solutions/crypto',
					},
					{
						title: 'Tokenized assets',
						description: 'Digitize, tokenize any asset on any standard >',
						href: '/solutions/tokenized-assets',
					},
					{
						title: 'Stablecoins',
						description: 'Issue, book, transact stablecoins, CBDC >',
						href: '/solutions/stablecoins',
					},
				],
			},
			{
				title: 'For whom',
				description:
					'Any business willing to start, grow or scale digital asset activity with an enterprise-grade infrastructure',
				linkLayout: 'list',
				links: [
					{
						title: 'Banks and financial institutions',
						description: 'Start, expand your digital asset product offering >',
						href: '/for/banks',
					},
					{
						title: 'Others',
						description: 'Technology providers, private companies, etc. >',
						href: '/for/others',
					},
				],
            },
            {
                title: 'For whom',
                description:
                    'Any business willing to start, grow or scale digital asset activity with an enterprise-grade infrastructure',
                linkLayout: 'list',
                links: [
                    {
                        title: 'Banks and financial institutions',
                        description: 'Start, expand your digital asset product offering >',
                        href: '/for/banks',
                    },
                    {
                        title: 'Others',
                        description: 'Technology providers, private companies, etc. >',
                        href: '/for/others',
                    },
                ],
            },
		],
	},
    {
        label: 'Insights',
        href: '#',
        // This item has TWO columns, each with a list of links.
        megaMenuContent: [
            {
                title: 'Use cases',
                description:
                    'Unlock 3 fundamental business activities: integrate and manage any digital asset',
                linkLayout: 'list',
                links: [
                    {
                        title: 'Cryptocurrencies',
                        description: 'Custody, stake and manage crypto incl. NFT >',
                        href: '/solutions/crypto',
                    },
                    {
                        title: 'Tokenized assets',
                        description: 'Digitize, tokenize any asset on any standard >',
                        href: '/solutions/tokenized-assets',
                    },
                    {
                        title: 'Stablecoins',
                        description: 'Issue, book, transact stablecoins, CBDC >',
                        href: '/solutions/stablecoins',
                    },
                ],
            },
            {
                title: 'For whom',
                description:
                    'Any business willing to start, grow or scale digital asset activity with an enterprise-grade infrastructure',
                linkLayout: 'list',
                links: [
                    {
                        title: 'Banks and financial institutions',
                        description: 'Start, expand your digital asset product offering >',
                        href: '/for/banks',
                    },
                    {
                        title: 'Others',
                        description: 'Technology providers, private companies, etc. >',
                        href: '/for/others',
                    },
                ],
            },           
        ],
    },
]
