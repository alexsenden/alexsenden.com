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
        content:
            "JavaScript/TypeScript, Go, GraphQL, REST, gRPC, PostgreSQL, React, Next.js, Express, and Prisma ORM.\n\n" +
            "As a member of the Travel Agents team once again, I performed the duties of a full-stack software developer. Some highlights include:" +
            "\n\n- Leading a cross-team integration of customer data into the phone sales agent platform, improving conversion rates" +
            "\n- Designing and implementing a system to allow phone sales agents to securely access a customer's saved payment methods while maintaining PCI DSS compliance, decreasing call handle time",
        imageUrl: "/priceline.jpg",
    },
    {
        title: "Software Developer Co-op",
        subtitle: "Priceline.com, May 2023 - August 2023",
        content:
            "JavaScript/TypeScript, Go, GraphQL, REST, gRPC, PostgreSQL, React, Next.js, Express, and Prisma ORM.\n\n" +
            "As a member of the Travel Agents team, I performed the duties of a full-stack software developer. Some highlights include:" +
            "\n\n- Overhauling the phone sales metrics system, greatly increasing the efficiency of GraphQL queries and implementing a more scalable metrics dashboard used by key stakeholders" +
            "\n- Automating periodic phone sales reports including a Slack integration for efficient monitoring",
        imageUrl: "/priceline.jpg",
    },
    {
        title: "Software Developer Co-op",
        subtitle: "iQmetrix, May 2023 - August 2023",
        content:
            "C#, .NET (Core & Framework) MSSQL, REST APIs, Load Testing (K6), Architecture Decision Records.\n\n" +
            "As a member of the Payments team, I performed the duties of a backend software developer. Some highlights include:" +
            "\n\n- Redesigning load test infrastructure for backend services to increase efficiency of test creation amidst scalability concerns" +
            "\n- Drafting an ADR to improve stability of a legacy system and presented the findings to stakeholders",
        imageUrl: "/iq-logo.jpg",
    },
];

const ExperienceSection = () => {
    return (
        <FadeInFadeOut>
            <SectionTitle title="Work Experience" />
            <CardCollection cards={experienceCards} cardHeight={"540px"}/>
        </FadeInFadeOut>
    );
};

export default ExperienceSection;
