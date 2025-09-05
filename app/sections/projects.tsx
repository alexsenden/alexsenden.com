import FadeInFadeOut from "~/components/FadeInFadeOut";
import SectionTitle from "../components/SectionTitle";
import CardCollection from "~/components/CardCollection";

const projectsCards = [
    {
        title: "Diffusion-based Dataset Augmentation for Downstream Segmentation",
        subtitle: "M.Sc. Thesis Project, Ongoing",
        content:
            "Python, Flux.1-dev, PyTorch, Diffusers, DeepSpeed, Variational AutoEncoders, Image Segmentation\n\n" +
            "In this project, I am modifying the architecture of a large pretrained diffusion foundation model" +
            "and training the resulting model to generate images and segmentation masks simultaneously.\n\n" +
            "The end result is a labelled dataset factory that can be used to augment segmentation datasets, reducing the expense of data labelling.",
        imageUrl: "/thesis-project.png",
    },
    {
        title: "Blockchained Federated Learning for Privacy-Preserving ML",
        subtitle: "April 2025",
        content:
            "Python, Federated Learning, Stable Diffusion, PyTorch, Blockchain, Smart Contracts, Solidity\n\n" +
            "In this project, I fine-tuned Stable Diffusion models using various Federated Learning strategies and aggregation algorithms, " +
            "including blockchained and non-blockchained schemes.\n\nOnce trained, these models were used to generate synthetic datasets. " +
            "This allows for privacy-preserving ML since a user's data never leaves their machine, however the resulting synthetic dataset incorporates features from all users' local data.",
        imageUrl: "/fl_project.png",
    },
    {
        title: "Retrieval Augmentation for Library-Oriented React Code Generation",
        subtitle: "April 2025",
        content:
            "Python, Llama, LLMs, Retrieval Augmented Generation, React, TypeScript, Node.js, ChromaDB\n\n" +
            "In this project, I designed a new template-based benchmark for evaluating React code within a design system." +
            " I then used this benchmark to evaluate the performance of different models on 5 component libraries from open-source corporate design systems.\n\n" +
            " I expanded my evaluation to include multiple RAG strategies, and then inverted the benchmark to quantify complexity internal to each component library.",
        imageUrl: "/react-lib-eval.png",
    },
    {
        title: "Wheat and Weeds: Semantic Segmentation in Crop Fields",
        subtitle: "November 2024",
        content:
            "Python, Semantic Segmentation, PyTorch, Applications of Computer Vision\n\n" +
            "In this project, I worked side-by-side with Daniel Pouteau, a graduate researcher in the Department of Plant Science, to create a model capable of accurately segmenting" +
            " wheat and weeds in drone images of crop fields. \n\nThis project aims to solve a real-world problem faced by agricultural researchers at the University of Manitoba." +
            " Using a fine-tuned Mask2Former model, we were able to push the IoU score to around 0.90, nearing human ability.",
        imageUrl: "/wheat_weeds_segmentation.png",
    },
    {
        title: "ThreadNet: Debugging Tool for Thread IoT Networks",
        subtitle: "April 2024",
        content:
            "C, JavaScript/TypeScript, Microcontrollers, IoT, Thread Networking Protocol\n\n" +
            "In this project, I worked alongside Landon Colburn to develop a debugging tool for Thread IoT networks. This tool included the ability to visualize the network topology live," +
            " while also monitoring connection metadata for each individual node.\n\n The tool included three different node communication methods (TCP, UDP Unicast, UDP Multicast) which" +
            " were indicated through an LED on the individual SOC (either an ESP32-C6 or an ESP Thread Border Router).",
        imageUrl: "/threadnet.png",
    },
    {
        title: "Harmony: The Social Network for Music Enthusiasts",
        subtitle: "December 2023",
        content:
            "JavaScript/TypeScript, Next.js, React, Node.js, Express, PostgreSQL, Prisma ORM, GitHub Actions, MusicBrainz Dataset\n\n" +
            "In this project, I led a group of fellow students through the design of a full-stack web application. This social media-style website was a hub for music enthusiasts to" +
            " discuss their favourite artists, albums, and songs.\n\n Direct user-to-user messaging was restricted, and all posts must be attached to a artists, albums, or songs in order" +
            " to focus the discussion on the music and reduce opportunities for hate and harassment.",
        imageUrl: "/harmony.png",
    },
];

const ProjectsSection = () => {
    return (
        <FadeInFadeOut>
            <SectionTitle title="Projects" />
            <CardCollection cards={projectsCards} cardHeight={"540px"} />
        </FadeInFadeOut>
    );
};

export default ProjectsSection;
