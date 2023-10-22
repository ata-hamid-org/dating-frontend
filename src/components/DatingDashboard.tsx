import React from "react";
import {
  Tabs,
  Tab,
  TabsOwnProps,
  Button,
  Slide,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MatchCard from "./MatchCard";
import MessagePreview from "./MessagePreview";

const StyledTab = styled(Tab)({
  // textTransform: "none",
});

function CustomTabPanel({ value, index, children }: any) {
  return <div hidden={value !== index}>{value === index && children}</div>;
}

function DatingDashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange: TabsOwnProps["onChange"] = (_event, newValue: number) =>
    setValue(newValue);

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <StyledTab label="Matches" />
        <StyledTab label="Messages" />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <Grid
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
          // component={List}
          sx={{ padding: 2 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={4} key={index}>
              <MatchCard />
            </Grid>
          ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <List>
          <li>
            <MessagePreview />
          </li>
          <li>
            <MessagePreview />
          </li>
          <li>
            <MessagePreview />
          </li>
        </List>
      </CustomTabPanel>
    </>
  );
}

export default DatingDashboard;
