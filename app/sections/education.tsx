import SectionTitle from "../components/SectionTitle";
import CardCollection from "~/components/CardCollection";
import FadeInFadeOut from "~/components/FadeInFadeOut";

const educationCards = [
    {
        title: "Master of Science in Computer Science",
        subtitle: "University of Manitoba, 2024-Present",
        content:
            "I am currently pursuing my M.Sc. in Computer Science at the University of Manitoba, focusing on generative AI, machine learning, and computer vision, where I have maintained a perfect 4.50/4.50 GPA.\n\n" +
            " Supported by an NSERC CGS-M scholarship, my research, supervised by Dr. Christopher Henry, aims to reduce the burden of data labelling for image segmention" +
            " by leveraging and modifying SOTA diffusion models to synthesize novel training data and their corresponding labels.",
        imageUrl: "/umanitoba.jpg",
    },
    {
        title: "Bachelor of Computer Science (Honours, Co-op)",
        subtitle: "University of Manitoba, 2020-2024",
        content:
            "I previously completed my B.C.Sc. (Honours, Co-op) at the University of Manitoba, graduating with a perfect 4.50/4.50 GPA.\n\n" +
            " During my undergraduate studies, I specialized in artificial intelligence and software engineering." +
            " My academic excellence was recognized through multiple scholarships and awards, including the Governer General's Silver Medal for being the undergraduate in the best academic standing," +
            " as well as the Faculty of Science Medal for being the top graduate in the Faculty of Science.",
        imageUrl: "/umanitoba.jpg",
    },
];

const EducationSection = () => {
    return (
        <FadeInFadeOut delay={3}>
            <SectionTitle title="Education" />
            <CardCollection cards={educationCards} />
        </FadeInFadeOut>
    );
};

export default EducationSection;
