import type { Profile_t } from "../types";
import "./Profile.css";


function Profile({ profile }: { profile: Profile_t }) {
    return (
        <div className="profile-base">
            <table>
                <tr>
                    <td>
                        <img className="profile-avatar" src={profile.avatar} alt="avatar" draggable={false} />
                    </td>
                    <td className="profile-left-border">
                        <h1 className="profile-name">{profile.name}</h1>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Profile;