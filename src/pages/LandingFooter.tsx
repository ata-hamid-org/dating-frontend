import { Box, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InstagramIcon from "../Icons/Instagram";
import TikTokIcon from "../Icons/TikTok";
import YoutubeIcon from "../Icons/Youtube";
import TwitterIcon from "../Icons/Twitter";
import FacebookIcon from "../Icons/Facebook";
import AppStoreImage from "../assets/app-store.webp";
import GooglePlayImage from "../assets/google-play.webp";

const StyledList = styled("ul")(({ theme }) => ({
  "& > :not(:last-child)": {
    marginBottom: theme.spacing(0.5),
  },
}));

function LandingFooter() {
  return (
    <Box component="footer" width="90%" mx="auto" p={2.5}>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={1}
        display="flex"
        borderBottom={1}
        borderColor="#d4d8de"
        my={1.5}
        pb={2}
      >
        <Grid item xs={4} sm={2.4} component="section">
          <Typography variant="heading" component="h2" mb={1.5}>
            Legal
          </Typography>
          <StyledList>
            <li>
              <Link href="#" variant="body2" underline="none">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Intellectual Property
              </Link>
            </li>
          </StyledList>
        </Grid>
        <Grid item xs={4} sm={2.4} component="section">
          <Typography variant="heading" component="h2" mb={1.5}>
            Careers
          </Typography>
          <StyledList>
            <li>
              <Link href="#" variant="body2" underline="none">
                Careers portal
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Tech Blog
              </Link>
            </li>
          </StyledList>
        </Grid>
        <Grid item xs={4} sm={2.4} component="section">
          <Typography variant="heading" component="h2" mb={1.5}>
            Social
          </Typography>
          <ul className="flex flex-wrap">
            <li className="w-[42px] h-[42px]">
              <Link href="#" variant="body2" underline="none">
                <InstagramIcon sx={{ width: 28, height: 28 }} />
              </Link>
            </li>
            <li className="w-[42px] h-[42px]">
              <Link href="#" variant="body2" underline="none">
                <TikTokIcon sx={{ width: 28, height: 28 }} />
              </Link>
            </li>
            <li className="w-[42px] h-[42px]">
              <Link href="#" variant="body2" underline="none">
                <YoutubeIcon sx={{ width: 28, height: 28 }} />
              </Link>
            </li>
            <li className="w-[42px] h-[42px]">
              <Link href="#" variant="body2" underline="none">
                <TwitterIcon sx={{ width: 28, height: 28 }} />
              </Link>
            </li>
            <li className="w-[42px] h-[42px]">
              <Link href="#" variant="body2" underline="none">
                <FacebookIcon sx={{ width: 28, height: 28 }} />
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={4} sm={2.4} component="section">
          <StyledList>
            <li>
              <Link href="#" variant="body2" underline="none">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Press room
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" variant="body2" underline="none">
                Promo code
              </Link>
            </li>
          </StyledList>
        </Grid>
      </Grid>
      <section className="flex items-center my-8">
        <Typography variant="heading" component="h2" mr={4}>
          Get the app!
        </Typography>
        <div className="flex items-center gap-4">
          <a href="https://example.com" target="_blank">
            <img src={AppStoreImage} className="h-12" />
          </a>
          <a href="https://example.com" target="_blank">
            <img src={GooglePlayImage} className="h-12" />
          </a>
        </div>
      </section>
      <section>
        <Typography
          variant="body4"
          component="p"
          color="textSecondary"
          mb={1.5}
        >
          All you singles, listen up: if you’re looking to fall in love, want to
          start dating, ready to start a relationship, or want to keep it
          casual, you need to be on Tinder. With over 55 billion matches made,
          it’s the best free dating site to find your next best match. You’ve
          probably noticed; the dating landscape looks very different today,
          with most of us choosing to meet people online. With Tinder, the
          world’s most popular free dating app, you have millions of other
          singles at your fingertips, and they’re all ready to meet someone like
          you. Whether you’re straight or part of the LGBTQIA community,
          Tinder’s here to get the sparks flying.
        </Typography>
        <Typography
          variant="body4"
          component="p"
          color="textSecondary"
          mb={1.5}
        >
          There really is something for everyone on Tinder. Looking for a
          relationship? You’ve got it. Want to make friends online? Say no more.
          Just started uni and want to make the most of your experience? Tinder
          U’s got you covered. Tinder isn’t your average dating site; it’s the
          most diverse dating app, where adults of all backgrounds and
          experiences are invited to make connections, memories and everything
          in between.
        </Typography>
      </section>
      <Typography
        component="section"
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", md: "initial" }}
        textAlign={{ xs: "center", md: "initial" }}
        rowGap={2}
        borderTop={1}
        borderColor="#d4d8de"
        py={2}
        variant="body4"
      >
        <div>
          <Link href="#" underline="none">
            FAQ
          </Link>
          <span className="mx-2">/</span>
          <Link href="#" underline="none">
            Safety tips
          </Link>
          <span className="mx-2">/</span>
          <Link href="#" underline="none">
            Terms
          </Link>
          <span className="mx-2">/</span>
          <Link href="#" underline="none">
            Cookie Policy
          </Link>
          <span className="mx-2">/</span>
          <Link href="#" underline="none">
            Privacy settings
          </Link>
        </div>
        <div>© 2023 Match Group, LLC, All Rights Reserved.</div>
      </Typography>
    </Box>
  );
}

export default LandingFooter;
