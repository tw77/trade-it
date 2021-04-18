import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Image } from "antd";
import { Rate } from 'antd';
import "./Profile.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
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
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  // footer: {
  //   // backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6),
  // },
}));

export default function Profile(props) {
  const classes = useStyles();
  const { userId } = useParams();
  const history = useHistory();

  const displayedUser = props.users.find((user) => user.id === Number(userId));

  const mergedReviews = [].concat.apply([], props.reviews);
  const displayedReviews = mergedReviews.filter(
    (review) => review.user_id === Number(userId)
  );

  // const displayedReviews = [
  //   {
  //     id: 1,
  //     content:
  //       "Alice was on time and the tennis rackets she gave me were in great condition",
  //     rating: 5,
  //     user_id: 1,
  //   },
  //   { id: 6, content: "Hey", rating: 5, user_id: 1 },
  // ];

  const displayedListings = props.listings.filter(
    (listing) => listing.user.id === Number(userId)
  );

  console.log("displayedUser", displayedUser);
  console.log("displayedReviews", displayedReviews);
  console.log("displayedListings", displayedListings);

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
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
          </CardContent>
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
                  // justify="space-evenly"
                  className={classes.root}
                >
                  <Grid item xs={4}>
                    <Image width={100} src={displayedUser.profile_picture} />
                  </Grid>

                  <Grid item xs={8}>
                    <Typography variant="h6" align="right" color="textPrimary">
                      {displayedUser.first_name} {displayedUser.last_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="right"
                      color="textPrimary"
                      paragraph
                    >
                      {displayedUser.bio}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography
                  variant="h5"
                  align="left"
                  color="subtitle 2"
                  paragraph
                  style={{ paddingTop: "8px", paddingTop: "8px" }}
                >
                  Listings by user
                </Typography>

                
                  <Grid container style={{ paddingTop: "10px"}} spacing={4}>
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
                  style={{ paddingTop: "8px", paddingTop: "10px" }}
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
