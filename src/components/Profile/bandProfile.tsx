import React from 'react';
import "./bandProfile.css"
import { Profile } from "./profile";
import { MemberProfile } from './memberProfile';


interface ProfileProps {
    profiles: Array<Profile>;
}

export const BandProfile: React.FC<ProfileProps> = ({ profiles }) => {
    return (
        <div id="band-profile">
            {profiles.map((profile, index) => (
                <div key={index}>
                    <MemberProfile profile={profile} />                   
                </div>
            ))}
        </div>
    );
}