import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Profile = styled(Box)({
  height: 87,
  backgroundImage: "linear-gradient(to top right, #fd267a, #ff6036)",
});

function ProfileNav() {
  return <Profile>Profile</Profile>;
}

export default ProfileNav;
