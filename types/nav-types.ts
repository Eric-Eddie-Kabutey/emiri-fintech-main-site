export type NavItem = {
    label: string;
    href: string;
    sublinks?: NavItem[];
};