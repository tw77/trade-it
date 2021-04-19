import React from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { green } from "@material-ui/core/colors";
import { Rate } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 12),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
}));

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 15,
    padding: "4px 8px",
    paddingRight: "17px",
    paddingLeft: "17px",
    border: "1px solid",
    lineHeight: 1,
    backgroundColor: "#CA302D",
    borderColor: "#CA302D",
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
      backgroundColor: "#BA262B",
      borderColor: "#BA262B",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#CA302D",
      borderColor: "#CA302D",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 15,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1,
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
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

export default function AcceptedProposal(props) {
  const classes = useStyles();

  const { proposalId } = useParams();

  const userId = 2;
  // for now

  const mergedProposals = [].concat.apply([], props.proposals);
  const currentUserProposals = mergedProposals.filter((proposal) => proposal.user_id === userId);
  const offeredItemIds = currentUserProposals.map((proposal) => proposal.listing_id);

  const tradesProposedToMe = mergedProposals.filter((proposal) => offeredItemIds.includes(proposal.asset_id));

  let acceptedProposal;
  let offeredItemListing;
  let wantedItemListing;

  if (tradesProposedToMe.find((proposal) => proposal.id === Number(proposalId))) {
    acceptedProposal = tradesProposedToMe.find((proposal) => proposal.id === Number(proposalId)); 
    offeredItemListing = props.listings.find((item) => item.id === acceptedProposal.asset_id);
    wantedItemListing = props.listings.find((item) => item.id === acceptedProposal.listing_id);
  } else {
    acceptedProposal = currentUserProposals.find((proposal) => proposal.id === Number(proposalId));
    offeredItemListing = props.listings.find((item) => item.id === acceptedProposal.listing_id);
    wantedItemListing = props.listings.find((item) => item.id === acceptedProposal.asset_id);
  };

  console.log('acceptedProposal', acceptedProposal);


  const offeredItemListing = props.listings.find(
    (item) => item.listing.id === acceptedProposal.listing_id
  );
  const wantedItemListing = props.listings.find(
    (item) => item.id === acceptedProposal.asset_id
  );

  // function confirmTrade(){};

  // function confirmPickUp(){};

  // function publishReview(){};

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h6" align="left" color="textPrimary" paragraph>
          Ready for trade:
        </Typography>

        {offeredItemListing && wantedItemListing ? (
          <Container maxWidth="md">
            <Grid
              container
              spacing={1}
              direction="row"
              alignItems="center"
              justify="space-evenly"
              className={classes.root}
            >
              <Grid className="grid" item xs={5} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={offeredItemListing.picture}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      {offeredItemListing.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={2} sm={2} md={4}>
                <AutorenewIcon style={{ fontSize: 35 }} color="primary" />
              </Grid>
              <Grid item xs={5} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={wantedItemListing.picture}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      {wantedItemListing.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {/* <div className="separation"> */}
            <Grid
              container
              spacing={0}
              direction="row"
              alignItems="center"
              justify="space-around"
              style={{ paddingTop: "10px" }}
            >
               <Grid item xs={3}>
                <BootstrapButton
                  variant="contained"
                  color="primary"
                  disableRipple
                >
                  Confirm pick-up
                </BootstrapButton>
              </Grid>
              
              <Grid item xs={5} sm={6} md={4}>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h7"
                  component="h3"
                >
                  {wantedItemListing.user.first_name}{" "}
                  {wantedItemListing.user.last_name}
                </Typography>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h7"
                  component="h3"
                >
                  {wantedItemListing.user.email}
                </Typography>
                <Typography
                  align="left"
                  gutterBottom
                  variant="h7"
                  component="h3"
                >
                  {wantedItemListing.user.phone}
                </Typography>
              </Grid>
            </Grid>
            <Rate />
            <form className={classes.form} noValidate>
              <TextField
                id="outlined-multiline-static"
                required
                fullWidth
                multiline
                rows={2}
                label="Leave a review"
                variant="outlined"
              />
              <div className="separation"></div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Publish
              </Button>
            </form>
          </Container>
        ) : (
          <div className={classes.progress}>
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
}
