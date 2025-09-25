import { NavItem } from "@/types/nav-types";


export const navigationItems: NavItem[] = [
    {
        label: "About Us",
        href: "/about-us",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Enterprise",
        href: "/enterprise",
    },
    {
        label: "Resources",
        href: "#", // Parent link doesn't navigate
        sublinks: [
            {
                label: "Insights",
                href: "/resources/insights",
            },
            {
                label: "Case studies",
                href: "/resources/case-studies",
            },
            {
                label: "Tool",
                href: "/resources/tool",
            },
        ],
    },
];