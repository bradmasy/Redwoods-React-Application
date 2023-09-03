import "./profile.css"
import { Profile } from "./profile";

interface ProfileProps {
    profile: Profile;
}


export const MemberProfile: React.FC<ProfileProps> = (profile) => {

    return (
        <div className="profile-container">
            <div className="profile-img-container">
                <img src={profile.profile.image}>
                </img>
            </div>
            <div className="profile-title-container">
                {profile.profile.title}
            </div>
            <div className="profile-content-container">
                {profile.profile.content}
            </div>
        </div>
    )
}