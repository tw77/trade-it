import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
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
    paddingTop: "100%",
  },
}));

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "4px 12px 8px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#2a9d8f",
    borderColor: "#2a9d8f",
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
  },
})(Button);

const BootstrapButton3 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "4px 12px 8px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#404a8a",
    borderColor: "#404a8a",
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
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
  let otherUserId;

  if (tradesProposedToMe.find((proposal) => proposal.id === Number(proposalId))) {
    acceptedProposal = tradesProposedToMe.find((proposal) => proposal.id === Number(proposalId)); 
    offeredItemListing = props.listings.find((item) => item.id === acceptedProposal.asset_id);
    wantedItemListing = props.listings.find((item) => item.id === acceptedProposal.listing_id);
    otherUserId = acceptedProposal.user_id;
  } else {
    acceptedProposal = currentUserProposals.find((proposal) => proposal.id === Number(proposalId));
    offeredItemListing = props.listings.find((item) => item.id === acceptedProposal.listing_id);
    wantedItemListing = props.listings.find((item) => item.id === acceptedProposal.asset_id);
    otherUserId = wantedItemListing.owner_id;
  };

  console.log('acceptedProposal', acceptedProposal);

  // function confirmTrade(){};

  // function confirmPickUp(){};

  const [reviewText, setReviewText] = useState("");
  const onReviewChange = function(event) {
    setReviewText(event.target.value);
    console.log('review', reviewText);
  };

  const [rating, setRating] = useState(0);
  const onRatingChange = function(value) {
    setRating({value});
    console.log('value', value);
  };

  function publishReview(event){
    event.preventDefault();
    props.updateReviews(otherUserId, reviewText, rating)
  };

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
                </Card>
              </Grid>
            </Grid>
            {/* <div className="separation"> */}
            <Grid
              container
              spacing={4}
              direction="row"
              alignItems="center"
              justify="space-around"
              style={{ paddingTop: "10px" }}
            >
               <Grid item xs={4}>
                <BootstrapButton2
                  variant="contained"
                  color="primary"
                  disableRipple
                >
                  Confirm pick-up
                </BootstrapButton2>
              </Grid>
              
              <Grid item xs={8} sm={6} md={4}>
              <Typography variant="subtitle1" align="right" color="textSecondary">
                  {wantedItemListing.user.first_name}{" "}
                  {wantedItemListing.user.last_name}
                </Typography>
                <Typography variant="subtitle1" align="right" color="textSecondary">
                  {wantedItemListing.user.email}
                </Typography>
                <Typography variant="subtitle1" align="right" color="textSecondary">
                  {wantedItemListing.user.phone}
                </Typography>
              </Grid>
            </Grid>
            <Rate onChange={onRatingChange} />
            <form className={classes.form} noValidate>
              <TextField
                id="outlined-multiline-static"
                required
                fullWidth
                multiline
                rows={2}
                label="Leave a review"
                variant="outlined"
                onChange={onReviewChange}
                value={reviewText}
              />
              <div className="separation"></div>
              <Grid container spacing={2} direction="row" justify="flex-end">
            <Grid item xs={3.5}>
              <BootstrapButton3

                  variant="contained"
                  color="primary"
                  disableRipple
                  onClick={publishReview}
                >
                  Publish
                </BootstrapButton3>
                </Grid>
                </Grid>
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
