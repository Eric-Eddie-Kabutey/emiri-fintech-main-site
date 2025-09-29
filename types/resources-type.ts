export type ResourceItem = {
    id: number;
    title: string;
    description: string;
    icon: (props: { className?: string }) => React.JSX.Element;
    activeColor: string; // The color of the dot when active
    href: string;
};