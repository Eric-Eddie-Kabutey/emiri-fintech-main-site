export type MegaMenuLink = {
    icon?: string;
    title: string;
    description: string;
    href: string;
};

export type MegaMenuColumn = {
    title: string;
    description: string;
    // This new property will let us style link groups, e.g., as a grid
    linkLayout?: 'list' | 'grid';
    links: MegaMenuLink[];
};

export type NavItem = {
    label: string;
    href: string;
    sublinks?: SubNavLink[];
    dropdownCols?: 1 | 2; // We only need 1 or 2 columns for this design
};


// new nav design
export type SubNavLink = {
    label: string;
    href: string;
};

export type MainNavLink = {
    label: string;
    href: string;
    sublinks?: SubNavLink[];
    dropdownCols?: 1 | 2 | 3 | 4; // Add this to control layout
};