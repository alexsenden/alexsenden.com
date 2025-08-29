import { Flex } from "@radix-ui/themes";

import ImageCard from "../components/ImageCard";
import SectionTitle from "../components/SectionTitle";

const ProjectsSection = () => {
    return (
        <div>
            <SectionTitle title="Projects" />
            <Flex justify="center" align="center" direction="column" gap="4">
                <Flex justify="center" align="center" direction="row" gap="4">
                    <ImageCard
                        title="Diffusion-based Dataset Augmentation for Downstream Segmentation"
                        subtitle="M.Sc. Thesis Project, Ongoing"
                        content={
                            "Python, Flux.1-dev, PyTorch, Diffusers, DeepSpeed, Variational AutoEncoders, Image Segmentation"
                        }
                        imageUrl="/thesis-project.png"
                        height="360px"
                    />
                    <ImageCard
                        title="Blockchained Federated Learning for Privacy-Preserving ML"
                        subtitle="April 2025"
                        content={
                            "Python, Federated Learning, Stable Diffusion, PyTorch, Blockchain, Smart Contracts, Solidity"
                        }
                        imageUrl="/fl_project.png"
                        height="360px"
                    />
                    <ImageCard
                        title="Retrieval Augmentation for Library-Oriented React Code Generation"
                        subtitle="April 2025"
                        content={
                            "Python, Llama, LLMs, Retrieval Augmented Generation, React, TypeScript, Node.js, ChromaDB"
                        }
                        imageUrl="/react-lib-eval.png"
                        height="360px"
                    />
                </Flex>
                <Flex justify="center" align="center" direction="row" gap="4">
                    <ImageCard
                        title="Wheat and Weeds: Semantic Segmentation in Crop Fields"
                        subtitle="November 2024"
                        content={
                            "Python, Semantic Segmentation, PyTorch, Applications of Computer Vision"
                        }
                        imageUrl="/wheat_weeds_segmentation.png"
                        height="360px"
                    />
                    <ImageCard
                        title="ThreadNet: Debugging Tool for Thread IoT Networks"
                        subtitle="April 2024"
                        content={
                            "Embedded C, JavaScript/TypeScript, Microcontrollers, IoT, Thread Networking Protocol"
                        }
                        imageUrl="/threadnet.png"
                        height="360px"
                    />
                    <ImageCard
                        title="Harmony: The Social Network for Music Enthusiasts"
                        subtitle="December 2023"
                        content={
                            "JavaScript/TypeScript, Next.js, React, Node.js, Express, PostgreSQL, Prisma ORM, GitHub Actions"
                        }
                        imageUrl="/harmony.png"
                        height="360px"
                    />
                </Flex>
            </Flex>
        </div>
    );
};

export default ProjectsSection;
