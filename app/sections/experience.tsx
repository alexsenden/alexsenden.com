import SectionTitle from "../components/SectionTitle";
import CardCollection from "~/components/CardCollection";
import FadeInFadeOut from "~/components/FadeInFadeOut";

const experienceCards = [
    {
        title: "Deep Learning Teaching Assistant",
        subtitle: "University of Manitoba\n September 2025 - December 2025",
        content:
            "Teaching Assistant for COMP 7950 - Deep Learning, the University of Manitoba's graduate-level deep learning course.",
        imageUrl: "/um-logo.jpg",
    },
    {
        title: "Software Developer Co-op",
        subtitle: "Priceline.com, May 2024 - August 2024",
        content: "Travel Agents Team.",
        imageUrl: "/priceline.jpg",
    },
    {
        title: "Software Developer Co-op",
        subtitle: "Priceline.com, May 2023 - August 2023",
        content: "Travel Agents Team.",
        imageUrl: "/priceline.jpg",
    },
    {
        title: "Software Developer Co-op",
        subtitle: "iQmetrix, May 2023 - August 2023",
        content: "Backend Payments Team.",
        imageUrl: "/iq-logo.jpg",
    },
];

const ExperienceSection = () => {
    return (
        <FadeInFadeOut>
            <SectionTitle title="Work Experience" />
            <CardCollection cards={experienceCards} />
        </FadeInFadeOut>
    );
};

export default ExperienceSection;
