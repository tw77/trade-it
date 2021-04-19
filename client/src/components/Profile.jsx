import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button, CardMedia, Grid, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Image } from "antd";
import { Rate } from "antd";
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

  let displayedReviews;
  userId &&
    (displayedReviews = mergedReviews.filter(
      (review) => review.user_id === Number(userId)
    ));
  !userId &&
    (displayedReviews = mergedReviews.filter((review) => review.user_id === 2)); // for now

  let displayedListings;
  userId &&
    (displayedListings = props.listings.filter(
      (listing) => listing.user.id === Number(userId)
    ));
  !userId &&
    (displayedListings = props.listings.filter(
      (listing) => listing.user.id === 2
    )); // for now

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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <main>
          <div className={classes.heroContent}>
            {displayedUser && displayedReviews && displayedListings ? (
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
                        // align="right"
                      >
                        Edit
                      </BootstrapButton3>
                    )}
                  </Grid>
                </Grid>

                <Typography
                  variant="h5"
                  align="left"
                  color="subtitle 2"
                  style={{ paddingTop: "8px"}}
                >
                  Listings by user
                </Typography>

                <Grid container style={{ paddingTop: "10px" }} spacing={4}>
                  {displayedListings.map((item) =>
                    getListingCard(item.id, item.name, item.picture)
                  )}
                </Grid>

                {/* <footer className={classes.footer}> */}
                <Typography
                  variant="h5"
                  align="left"
                  color="subtitle 2"
                  paragraph
                  style={{ paddingTop: "8px"}}
                >
                  Reviews
                </Typography>
                {displayedReviews.map((review, index) => (
                  <>
                    <Rate disabled defaultValue={review.rating} />
                    <Typography
                      variant="subtitle1"
                      align="center"
                      color="textSecondary"
                      component="p"
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
    </React.Fragment>
  );
}
