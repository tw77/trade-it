import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Avatar,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Image } from "antd";
// import "./Listing.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 14),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "100%",
  },
}));

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#27B376",
    borderColor: "#27B376",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#006F3C",
      borderColor: "#006F3C",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#006F3C",
      borderColor: "#006F3C",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

export default function Listing(props) {
  const classes = useStyles();
  const { listingId } = useParams();
  const history = useHistory();

  const currentListing = props.listings.find(
    (listing) => listing.id === Number(listingId)
  );

  console.log("currentListing", currentListing);

  function toOffer() {
    history.push(`/offer/${listingId}`);
  }

  function toUserProfile() {
    history.push(`/profile/${currentListing.owner_id}`);
  }

  const generateListingJSX = () => {
    return (
      <>
        <div className={classes.heroContent}>
          {currentListing ? (
            <div>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                // justify="space-evenly"
              >
                <Grid className="grid" item xs={12}>
                  <Image
                    width={350}
                    src={currentListing.picture}
                    style={{ borderRadius: "10px", marginBottom: "15px" }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item xs={7} style={{ marginBottom: "0px" }}>
                  <Typography component="h1" align="left" variant="h5">
                    {currentListing.name}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <BootstrapButton2
                    variant="contained"
                    color="primary"
                    disableRipple
                    className={classes.margin}
                    onClick={toOffer}
                  >
                    Propose a trade!
                  </BootstrapButton2>
                </Grid>
              </Grid>
              <Typography
                component="h1"
                align="justify"
                variant="subtitle1"
                style={{ padding: "8px 21px 8px 21px" }}
              >
                {currentListing.description}
              </Typography>
              <Divider />
              <strong style={{ marginRight: "10px" }}>
                {currentListing.user.first_name} {currentListing.user.last_name}
              </strong>
              {currentListing.neighbourhood.name}, {currentListing.city.name}
              <Button
                onClick={toUserProfile}
                startIcon={
                  <Avatar
                    src={currentListing.user.profile_picture}
                    style={{ marginLeft: "10px" }}
                  />
                }
              ></Button>
              <Divider />
              <Typography
                component="h1"
                align="justify"
                variant="h6"
                style={{ padding: "8px 21px" }}
              >
                Trade history
              </Typography>
              <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="flex-start"
                style={{ padding: "8px 21px" }}
              >
                <Grid item xs={1}>
                  <ArrowForwardIcon style={{ fontSize: 20 }} color="primary" />
                </Grid>
                <Grid item xs={3}>
                  <Image
                    width={50}
                    src={currentListing.picture}
                    style={{ borderRadius: "10px"}}
                  />
                </Grid>
              </Grid>
            </div>
          ) : (
            <div className={classes.progress}>
              <CircularProgress />
            </div>
          )}
        </div>
      </>
    );
  };

  // Propose a trade! button links to {ProposeTrade}

  return (
    <>
      {currentListing === undefined && <CircularProgress />}
      {currentListing !== undefined && currentListing && generateListingJSX()}
    </>
  );
}
