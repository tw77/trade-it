import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  Typography,
  TextField,
  CircularProgress,
  CardMedia,
  Button,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
    backgroundColor: "#2a9d8f", //green
    borderColor: "#2a9d8f", //green
    fontFamily: ["Roboto", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#2a9d8f", //green
      borderColor: "#2a9d8f", //green
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "none",
      backgroundColor: "#2a9d8f", //green
      borderColor: "#2a9d8f", //green
    },
  },
})(Button);

const BootstrapButton3 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "4px 12px 8px 12px",
    lineHeight: 1.5,
    backgroundColor: "#2a9d8f", //green
    borderColor: "#2a9d8f", //green
    fontFamily: ["Roboto", "sans-serif"].join(","),
    "&:hover": {
      backgroundColor: "#2a9d8f", //green
      borderColor: "#2a9d8f", //green
      boxShadow: "none",
    },
    "&:focus": {
      boxShadow: "none",
      backgroundColor: "#2a9d8f", //green
      borderColor: "#2a9d8f", //green
    },
  },
})(Button);

const CustomTypography = withStyles({
  root: {
    color: "#6e5d34",
  },
})(Typography);

export default function AcceptedProposal(props) {
  const classes = useStyles();
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const { proposalId } = useParams();
  const userId = 2; // for now

  const mergedProposals = [].concat.apply([], props.proposals);
  const currentUserProposals = mergedProposals.filter(
    (proposal) => proposal.user_id === userId
  );

  const userListings = props.listings.filter(
    (listing) => listing.user.id === userId
  );
  const userListingIds = userListings.map((listing) => listing.id);

  const tradesProposedToMe = mergedProposals.filter((proposal) =>
    userListingIds.includes(proposal.asset_id)
  );

  let acceptedProposal;
  let offeredItemListing;
  let wantedItemListing;
  let otherUserId;

  // find whether the accepted proposal was proposed to the user or by the user. then retrieve details:
  if (
    tradesProposedToMe.find((proposal) => proposal.id === Number(proposalId)) 
  ) {
    acceptedProposal = tradesProposedToMe.find(
      (proposal) => proposal.id === Number(proposalId)
    );
    offeredItemListing = props.listings.find(
      (item) => item.id === acceptedProposal.asset_id
    );
    wantedItemListing = props.listings.find(
      (item) => item.id === acceptedProposal.listing_id
    );
    otherUserId = acceptedProposal.user_id;
  } else {
    acceptedProposal = currentUserProposals.find(
      (proposal) => proposal.id === Number(proposalId)
    );
    offeredItemListing = props.listings.find(
      (item) => item.id === acceptedProposal.listing_id
    );
    wantedItemListing = props.listings.find(
      (item) => item.id === acceptedProposal.asset_id
    );
    otherUserId = wantedItemListing.owner_id;
  }

  const [reviewText, setReviewText] = useState("");
  function onReviewChange(event) {
    setReviewText(event.target.value);
  };

  const [rating, setRating] = useState(0);
  function onRatingChange(value) {
    setRating({ value });
  };

  function publishReview(event) {
    event.preventDefault();
    props.updateReviews(otherUserId, reviewText, rating);
    setSubmitting(true);
  }

  const [buttonText, setButtonText] = useState("Confirm pick-up");

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
            <Grid
              container
              spacing={4}
              direction="row"
              alignItems="center"
              justify="space-around"
              style={{ paddingTop: "10px" }}
            >
              <Grid item xs={4}>
                <BootstrapButton3
                  variant="contained"
                  color="primary"
                  disableRipple
                  onClick={() => setButtonText("Pick up confirmed")}
                >
                  {buttonText}
                </BootstrapButton3>
              </Grid>

              <Grid item xs={8} sm={6} md={4}>
                <Typography
                  variant="subtitle1"
                  align="right"
                  color="textSecondary"
                  onClick={() =>
                    history.push(`/profile/${wantedItemListing.user.id}`)
                  }
                >
                  {wantedItemListing.user.first_name}{" "}
                  {wantedItemListing.user.last_name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="right"
                  color="textSecondary"
                  onClick={() =>
                    history.push(`/profile/${wantedItemListing.user.id}`)
                  }
                >
                  {wantedItemListing.user.email}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="right"
                  color="textSecondary"
                  onClick={() =>
                    history.push(`/profile/${wantedItemListing.user.id}`)
                  }
                >
                  {wantedItemListing.user.phone}
                </Typography>
              </Grid>
            </Grid>
            {submitting ? (
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12}>
                  <CustomTypography
                    variant="h6"
                    align="justify"
                    style={{
                      backgroundColor: "#e9c46a",
                      border: "2.5px solid #4958b6",
                      padding: "26px",
                      borderRadius: "10px",
                      marginTop: "15%",
                    }}
                  >
                    Your review has been published.
                  </CustomTypography>
                </Grid>
              </Grid>
            ) : (
              <>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={6}>
                    <Rate onChange={onRatingChange} />
                  </Grid>
                </Grid>
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
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-end"
                  >
                    <Grid item xs={3.5}>
                      <BootstrapButton2
                        variant="contained"
                        color="primary"
                        disableRipple
                        onClick={publishReview}
                      >
                        Publish
                      </BootstrapButton2>
                    </Grid>
                  </Grid>
                </form>
              </>
            )}
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
