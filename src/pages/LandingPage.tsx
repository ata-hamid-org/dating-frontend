import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grow,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import BackgroundImage from "../assets/background-landing.webp";
import "./landing.css";
import { alpha, styled } from "@mui/material/styles";
import LandingFooter from "./LandingFooter";
import TinderIcon from "../Icons/Tinder";
import { useToggle } from "../hooks/useToggle";
import FlameIcon from "../Icons/Flame";

import AppStoreImage from "../assets/app-store.webp";
import GooglePlayImage from "../assets/google-play.webp";
import SigninApple from "../assets/signin-apple.png";
import { Link as RouterLink } from "react-router-dom";

const LoginButton = styled(Button)(({ theme }) => ({
  borderRadius: 18,
  textTransform: "none",
  padding: "4px 16px",
  minWidth: 120,
  backgroundImage: "linear-gradient(to top right, #fd267a, #ff6036)",

  "&:hover": {
    backgroundImage: `linear-gradient(to top right, ${alpha(
      "#ff6036",
      theme.palette.action.hoverOpacity
    )}, #fd267a)`,
  },
}));

const Header = styled("header")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  position: "sticky",
  top: 0,
  minHeight: 0,
  height: 96,
  zIndex: 100,
  paddingRight: 8,
  paddingLeft: 8,
}));

function LandingPage() {
  const { on, toggle } = useToggle(false);

  return (
    <main>
      <div className="h-screen">
        <Header>
          <div className="flex items-center mx-[12px]">
            <a href="/">
              <TinderIcon sx={{ width: 150, height: "auto" }} />
            </a>
            <Typography
              display="flex"
              component="ul"
              variant="display3"
              ml={3}
              gap={2.5}
            >
              <li>
                <Link href="#" underline="hover">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" underline="hover">
                  Download
                </Link>
              </li>
            </Typography>
          </div>
          <LoginButton variant="contained" onClick={toggle}>
            Log in
          </LoginButton>
        </Header>
        <div
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            height: "100vh",
          }}
          className="bg-fixed absolute bg-cover bg-center inset-0"
        >
          Swipe Right
        </div>
        <div className="ShadowBox"></div>
        <div className="relative">
          <h1 style={{ fontSize: "12vw", fontWeight: 800, color: "white" }}>
            Swipe Right™
          </h1>
        </div>
      </div>
      <LandingFooter />
      <SimpleDialog open={on} onClose={toggle} />
    </main>
  );
}

function SimpleDialog(props: any) {
  const { onClose, open } = props;
  return (
    <Dialog onClose={onClose} open={open}>
      <Box width="440px" py="36px" px="44px" textAlign="center">
        <FlameIcon sx={{ width: 36, height: "auto" }} />
        <Typography variant="display1" mt={2.5} mb={2}>
          Get started
        </Typography>
        <Typography variant="body3" component="p" mb={1}>
          By clicking Log in, you agree to our Terms. Learn how we process your
          data in our Privacy Policy and Cookie Policy.
        </Typography>
        <Box component={RouterLink} to="/app" display="block">
          <img src={SigninApple} className="h-12" />
        </Box>
        <Typography variant="heading" component="h3" mt={3} mb={3}>
          Get the app!
        </Typography>
        <div className="flex items-center justify-around">
          <a href="https://example.com" target="_blank">
            <img src={AppStoreImage} className="h-12" />
          </a>
          <a href="https://example.com" target="_blank">
            <img src={GooglePlayImage} className="h-12" />
          </a>
        </div>
      </Box>
    </Dialog>
  );
}

export default LandingPage;
