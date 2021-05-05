import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  Button,
  CardMedia,
  Grid,
  Typography,
  CssBaseline,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Image, Rate } from "antd";
import "./Profile.css";

const BootstrapButton3 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#404a8a",
    borderColor: "#404a8a",
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 14),
    paddingTop: "100px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const { userId } = useParams();
  const history = useHistory();

  let displayedUser;
  userId &&
    (displayedUser = props.users.find((user) => user.id === Number(userId)));
  !userId && (displayedUser = props.users.find((user) => user.id === 2)); // for now
  const mergedReviews = [].concat.apply([], props.reviews);

  let reviewsOfUser;
  userId &&
    (reviewsOfUser = mergedReviews.filter(
      (review) => review.user_id === Number(userId)
    ));
  !userId &&
    (reviewsOfUser = mergedReviews.filter((review) => review.user_id === 2)); // for now

  let listingsByUser;
  userId &&
    (listingsByUser = props.listings.filter(
      (listing) => listing.user.id === Number(userId)
    ));
  !userId &&
    (listingsByUser = props.listings.filter(
      (listing) => listing.user.id === 2
    )); // for now

  const acceptedProposals = props.proposals.filter(
    (proposal) => proposal.is_accepted === true
  );
  const unavailableListingIds = acceptedProposals.map(
    (proposal) => proposal.listing_id
  );
  const unavailableAssetIds = acceptedProposals.map(
    (proposal) => proposal.asset_id
  );
  unavailableListingIds.push(...unavailableAssetIds);
  const availableListings = listingsByUser.filter(
    (listing) => !unavailableListingIds.includes(listing.id)
  );

  function getListingCard(listingsId, name, picture) {
    return (
      <Grid item xs={6} sm={6} md={4} key={listingsId}>
        <Card
          className={classes.card}
          onClick={() => history.push(`/listings/${listingsId}`)}
        >
          <CardMedia
            className={classes.cardMedia}
            image={picture}
            title={name}
          />
        </Card>
      </Grid>
    );
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <main>
          <div className={classes.heroContent}>
            {displayedUser ? (
              <>
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  alignItems="center"
                  className={classes.root}
                >
                  <Grid item xs={4}>
                    <Image
                      style={{ borderRadius: "5px", marginBottom: "15px" }}
                      width={100}
                      src={displayedUser.profile_picture}
                    />
                  </Grid>

                  <Grid item xs={8}>
                    <Typography variant="h6" align="right" color="textPrimary">
                      {displayedUser.first_name} {displayedUser.last_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="right"
                      color="textSecondary"
                      paragraph
                    >
                      {displayedUser.bio}
                    </Typography>

                    {displayedUser.id === 2 && (
                      <BootstrapButton3
                        variant="contained"
                        color="primary"
                        disableRipple
                      >
                        Edit
                      </BootstrapButton3>
                    )}
                  </Grid>
                </Grid>
                {availableListings.length > 0 && (
                  <>
                    <Typography
                      variant="h5"
                      align="left"
                      color="subtitle 2"
                      style={{ paddingTop: "8px" }}
                    >
                      Listings by user
                    </Typography>

                    <Grid container style={{ paddingTop: "10px" }} spacing={4}>
                      {availableListings.map((item) =>
                        getListingCard(item.id, item.name, item.picture)
                      )}
                    </Grid>
                  </>
                )}

                <Typography
                  variant="h5"
                  align="left"
                  color="subtitle 2"
                  paragraph
                  style={{ paddingTop: "8px" }}
                >
                  Reviews
                </Typography>
                {reviewsOfUser.map((review, index) => (
                  <>
                    <Rate
                      disabled
                      style={{ paddingLeft: "31%" }}
                      defaultValue={review.rating}
                    />
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="textSecondary"
                    >
                      {review.content}
                    </Typography>
                  </>
                ))}
              </>
            ) : (
              <>
                <div className={classes.progress}>
                  <CircularProgress />
                </div>
              </>
            )}
          </div>
        </main>
      </Container>
    </>
  );
}
