import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProfileCardImage from "../assets/profile-card.webp";
import RewindIcon from "../assets/rewind.svg?react";
import NopeIcon from "../assets/nope.svg?react";
import LikeIcon from "../assets/like.svg?react";
import Fingerprint from "@mui/icons-material/Fingerprint";

const Main = styled(Box)({
  flex: 1,
  backgroundColor: "#f0f2f4",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function MatchFinder() {
  return (
    <Main>
      <div
        style={{
          width: "100%",
          maxWidth: 375,
          height: 600,
          backgroundImage: `url(${ProfileCardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 8,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 8,
            padding: "16px 8px",
            backgroundColor: "black",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <IconButton
            style={{
              height: 70,
              width: 70,
              border: "1px solid #cd7105",
            }}
          >
            <RewindIcon style={{ transform: "scale(1.5)" }} />
          </IconButton>
          <IconButton
            style={{
              height: 70,
              width: 70,
              border: "1px solid #ff4458",
            }}
          >
            <NopeIcon style={{ transform: "scale(1.5)" }} />
          </IconButton>
          <IconButton
            style={{
              height: 70,
              width: 70,
              border: "1px solid #129e68",
            }}
          >
            {/* fd267a #ff6036 */}
            <LikeIcon style={{ transform: "scale(1.5)" }} />
          </IconButton>
        </div>
      </div>
    </Main>
  );
}

export default MatchFinder;
