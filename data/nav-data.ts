import { MainNavLink, NavItem, SubNavLink } from "@/types/nav-types";

// --- Data for the Top Bar ---
export const topBarLinks: SubNavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "FOREX and EIBOR", href: "/forex" },
	{ label: "Consumer", href: "/consumer" },
	{ label: "Legislation", href: "/legislation" },
	{ label: "Museum", href: "/museum" },
	{ label: "Open Data", href: "/open-data" },
	{ label: "Digital Participation", href: "/digital-participation" },
	{ label: "Services", href: "/services" },
	{ label: "Careers", href: "/careers" },
	{ label: "Contact Us", href: "/contact" },
];

export const navigationItems: NavItem[] = [
	{
		label: "About CBUAE",
		href: "/about",
		dropdownCols: 1,
		sublinks: [
			{ label: "About the CBUAE", href: "/about/cbuae" },
			{ label: "Our Leadership", href: "/about/leadership" },
			{ label: "CBUAE Awards and Certificates", href: "/about/awards" },
		],
	},
	{
		label: "Our Operations",
		href: "/operations",
		dropdownCols: 2,
		sublinks: [
			{ label: "Monetary Policy and Domestic Markets", href: "/operations/monetary-policy" },
			{ label: "Risk Management", href: "/operations/risk-management" },
			{ label: "Reserve Management", href: "/operations/reserve-management" },
			{ label: "Islamic Finance", href: "/operations/islamic-finance" },
			{ label: "Financial Stability", href: "/operations/financial-stability" },
			{ label: "Regulatory Development", href: "/operations/regulatory-development" },
			{ label: "Payments and Settlements", href: "/operations/payments" },
			{ label: "Supervision", href: "/operations/supervision" },
			{ label: "Currency and Coins", href: "/operations/currency" },
			{ label: "AML/CFT Supervision", href: "/operations/aml-cft" },
			{ label: "FinTech & Digital Transformation", href: "/operations/fintech" },
			{ label: "Enforcement", href: "/operations/enforcement" },
			{ label: "The Procurement and Contracts Management", href: "/operations/procurement" },
			{ label: "Sustainable Finance", href: "/operations/sustainable-finance" },
		]
	},
	{
		label: "Licensing",
		href: "/licensing",
	},
	{
		label: "News and Publications",
		href: "/news",
		dropdownCols: 1,
		sublinks: [
			{ label: "News and Insights", href: "/news/insights" },
			{ label: "Publications", href: "/news/publications" },
			{ label: "Events", href: "/news/events" },
		]
	},
	{
		label: "Research and Statistics",
		href: "/research",
	},
	{
		label: "Rulebook",
		href: "/rulebook",
	},
];