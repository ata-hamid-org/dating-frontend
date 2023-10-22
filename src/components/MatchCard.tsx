import MatchCardImage from "../assets/match-card2.jpeg";

function MatchCard() {
  return (
    <a
      href="/"
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: 320,
          aspectRatio: 0.8 / 1,
          maxWidth: "100%",
          backgroundImage: `url(${MatchCardImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 4,
        }}
      ></div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%)",
          height: "30%",
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          borderRadius: 4,
        }}
      ></div>
      <span
        style={{ position: "absolute", left: 0, bottom: 0, color: "white" }}
      >
        Sydney
      </span>
    </a>
  );
}

export default MatchCard;
