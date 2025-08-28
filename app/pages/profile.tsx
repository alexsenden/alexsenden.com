import ImageCard from "../components/ImageCard";
import Headshot from "../components/Headshot";

const Profile = (): React.ReactElement => {
    return (
        <div>
            <div>Profile Page</div>
            <Headshot />
            <ImageCard
                title="University of Manitoba"
                content="I attended the U of M for my B.C.Sc. and M.Sc."
                imageUrl="/umanitoba.jpg"
            />
        </div>
    );
};

export default Profile;
