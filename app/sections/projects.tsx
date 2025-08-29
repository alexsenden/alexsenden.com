import SectionTitle from "../components/SectionTitle";
import CardCollection from "~/components/CardCollection";

const projectsCards = [
    {
        title: "Diffusion-based Dataset Augmentation for Downstream Segmentation",
        subtitle: "M.Sc. Thesis Project, Ongoing",
        content:
            "Python, Flux.1-dev, PyTorch, Diffusers, DeepSpeed, Variational AutoEncoders, Image Segmentation",
        imageUrl: "/thesis-project.png",
        height: "360px",
    },
    {
        title: "Blockchained Federated Learning for Privacy-Preserving ML",
        subtitle: "April 2025",
        content:
            "Python, Federated Learning, Stable Diffusion, PyTorch, Blockchain, Smart Contracts, Solidity",
        imageUrl: "/fl_project.png",
        height: "360px",
    },
    {
        title: "Retrieval Augmentation for Library-Oriented React Code Generation",
        subtitle: "April 2025",
        content:
            "Python, Llama, LLMs, Retrieval Augmented Generation, React, TypeScript, Node.js, ChromaDB",
        imageUrl: "/react-lib-eval.png",
        height: "360px",
    },
    {
        title: "Wheat and Weeds: Semantic Segmentation in Crop Fields",
        subtitle: "November 2024",
        content:
            "Python, Semantic Segmentation, PyTorch, Applications of Computer Vision",
        imageUrl: "/wheat_weeds_segmentation.png",
        height: "360px",
    },
    {
        title: "ThreadNet: Debugging Tool for Thread IoT Networks",
        subtitle: "April 2024",
        content:
            "Embedded C, JavaScript/TypeScript, Microcontrollers, IoT, Thread Networking Protocol",
        imageUrl: "/threadnet.png",
        height: "360px",
    },
    {
        title: "Harmony: The Social Network for Music Enthusiasts",
        subtitle: "December 2023",
        content:
            "JavaScript/TypeScript, Next.js, React, Node.js, Express, PostgreSQL, Prisma ORM, GitHub Actions",
        imageUrl: "/harmony.png",
        height: "360px",
    },
];

const ProjectsSection = () => {
    return (
        <div>
            <SectionTitle title="Projects" />
            <CardCollection cards={projectsCards} />
        </div>
    );
};

export default ProjectsSection;
