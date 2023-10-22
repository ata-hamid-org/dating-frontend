import { Link } from "@mui/material";
import MessagePreviewImage from "../assets/message-preview2.webp";

function MessagePreview() {
  return (
    <Link href="/" style={{ display: "flex" }} underline="none" color="default">
      <div style={{ padding: "12px 24px" }}>
        <div
          style={{
            width: 78,
            height: 78,
            backgroundImage: `url(${MessagePreviewImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>Julian</h2>
        <div>Hi handsome</div>
      </div>
    </Link>
  );
}

export default MessagePreview;
