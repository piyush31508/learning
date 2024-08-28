import ChangeProfile from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
const Profile = () => {
const {username} = useContext(AppContext);
    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome to the Profile page.The user is {username}</p>
            <ChangeProfile />
        </div>
    )
}

export default Profile;