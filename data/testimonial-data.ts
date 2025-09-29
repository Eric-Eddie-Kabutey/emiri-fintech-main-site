import { Testimonial } from "@/types/testimonial-types";

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        companyName: "Swissquote",
        logo: "/assets/icons/logo-swissquote-original.svg",
        quote: "We are delighted to have found a very innovative partner in Taurus. With Taurus' products, we can offer our customers an expanded range of investment opportunities in the field of digital assets.",
        authorName: "Paolo Buzzi",
        authorTitle: "Co-founder and Deputy CEO, Swissquote",
        backgroundImage: "/assets/images/home/ts-img1.webp", 
        ctaLink: "/case-studies/swissquote",
    },
    {
        id: 2,
        companyName: "Temenos",
        logo: "/assets/icons/logo-temenos-original.svg",
        quote: "Taurus is leading the field in cryptography and blockchain technology. By joining forces, we can help banks to bridge the gap between traditional investments and digital assets.",
        authorName: "Alexandre Duret",
        authorTitle: "Product Director, Temenos",
        backgroundImage: "/assets/images/home/ts-img2.webp",
        ctaLink: "/case-studies/temenos",
    },
    {
        id: 3,
        companyName: "Deutsche Bank",
        logo: "/assets/icons/logo-deutsche-bank.webp",
        quote: "As the digital asset space is expected to encompass trillions of dollars of assets, it's bound to be seen as one of the priorities for investors and corporations alike. This is why we are excited to partner with Taurus.",
        authorName: "Paul Maley",
        authorTitle: "Global Head of Securities Services at Deutsche Bank AG",
        backgroundImage: "/assets/images/home/ts-img3.webp",
        ctaLink: "/case-studies/deutsche-bank",
    },
];