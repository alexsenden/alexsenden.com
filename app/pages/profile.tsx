import EducationSection from "../sections/education";
import ExperienceSection from "../sections/experience";
import ProfileHeader from "../sections/profile-header";
import ProjectsSection from "../sections/projects";

const Profile = (): React.ReactElement => {
    return (
        <div>
            <ProfileHeader />
            <EducationSection />
            <ProjectsSection />
            <ExperienceSection />
        </div>
    );
};

export default Profile;
