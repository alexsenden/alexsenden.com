import SectionTitle from "../components/SectionTitle";
import CardCollection from "~/components/CardCollection";
import FadeInFadeOut from "~/components/FadeInFadeOut";

const nonNerdyCards = [
    {
        title: "Hockey",
        subtitle: "4 Teams Annually",
        content:
            "Outside of the tech world, I have always been an avid hockey player. I learned to skate when I was 3, and have been playing hockey since I was 5. " +
            "I currently play on 4 different teams in recreational men's leagues around Winnipeg ranging in skill levels, including one team with my Dad, " +
            "and another team with Junior players, College players, and an NHL draft pick.",
        imageUrl: "/hockey.jpg",
    },
    {
        title: "Golf",
        subtitle: "Various Courses, Mostly in Manitoba",
        content:
            "I have been golfing recreationally since I was a kid, where I played in a youth league at a local Par 3 course. " +
            "I now golf more casually with friends and family at various courses around Manitoba.",
        imageUrl: "/golfing.jpg",
    },
    {
        title: "Watersports",
        subtitle: "Wakeboarding, Water Skiing, etc.",
        content:
            "As a kid growing up in Winnipeg, you spend a lot of time around the water in the summer. " +
            "I have been wakeboarding and water skiing since I was young, and I am currently learning to slalom water ski (waterskiing on one ski).",
        imageUrl: "/watersports.jpg",
    },
    {
        title: "Hiking",
        subtitle: "📍 Everywhere",
        content:
            "A newer hobby of mine is hiking. Recently, I have been hiking in Vancouver, BC, Banff, AB, and just outside of Kenora, ON. " + 
            "Some of my favourites are the summit hike in the Murrin Provincial Park near Squamish, BC, and Devil's Bridge in Sedona, AZ.",
        imageUrl: "/hiking.jpg",
    },
    {
        title: "Travelling",
        subtitle: "📍 Wherever I Can",
        content:
            "I have been fortunate enough to travel to many places around the world, primarily across North America." +
            " Some of my favourite places I have visited include Banff, AB; Lucerne, SUI; Sedona, AZ; and New York City, NY." +
            " Right now, my goal is to explore more places in Canada!",
        imageUrl: "/travelling.jpg",
    },
];

const NonNerdySection = () => {
    return (
        <FadeInFadeOut>
            <SectionTitle title="Non-Nerdy Things" />
            <CardCollection cards={nonNerdyCards} />
        </FadeInFadeOut>
    );
};

export default NonNerdySection;
