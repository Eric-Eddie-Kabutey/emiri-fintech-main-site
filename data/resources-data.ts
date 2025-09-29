import { ResourceItem } from "@/types/resources-type";
import  BuildingIcon  from "@/components/icons/building-icon"


export const resourcesData: ResourceItem[] = [
    {
        id: 1,
        title: "Banks and Financial Institutions",
        description: "This section provides information on foreign and domestic entities licensed by the Central Bank of the UAE that operate in the UAE.",
        icon: BuildingIcon,
        activeColor: "bg-cyan-400",
        href: "/resources/banks",
    },
    {
        id: 2,
        title: "Insurance",
        description: "Explore the regulatory framework and licensed providers for the insurance sector in the UAE.",
        icon: BuildingIcon,
        activeColor: "bg-yellow-400",
        href: "/resources/insurance",
    },
    {
        id: 3,
        title: "Research and Statistics",
        description: "Access a comprehensive repository of economic data, reports, and statistical publications from the Central Bank.",
        icon: BuildingIcon,
        activeColor: "bg-yellow-400",
        href: "/resources/research",
    },
    {
        id: 4,
        title: "Consumers",
        description: "Information and resources to protect and educate financial consumers in the UAE.",
        icon: BuildingIcon,
        activeColor: "bg-yellow-400",
        href: "/resources/consumers",
    },
    {
        id: 5,
        title: "Media",
        description: "Find the latest press releases, media kits, and official communications from the Central Bank.",
        icon: BuildingIcon,
        activeColor: "bg-yellow-400",
        href: "/resources/media",
    },
];