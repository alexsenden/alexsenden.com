import EducationSection from "../sections/education";
import ProfileHeader from "../sections/profile-header";
import ProjectsSection from "../sections/projects";

const Profile = (): React.ReactElement => {
    return (
        <div>
            <ProfileHeader />
            <EducationSection />
            <ProjectsSection />
        </div>
    );
};

export default Profile;
