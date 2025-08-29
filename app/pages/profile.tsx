import EducationSection from "../sections/education";
import ProfileHeader from "../sections/profile-header";

const Profile = (): React.ReactElement => {
    return (
        <div>
            <ProfileHeader />
            <EducationSection />
        </div>
    );
};

export default Profile;
