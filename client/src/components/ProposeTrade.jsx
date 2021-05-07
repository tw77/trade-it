import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  CardMedia,
  Button,
  Container,
  CssBaseline
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Carousel } from "antd";
import "./ProposeTrade.css";

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
      "Roboto",
      "sans-serif"
    ].join(","),
  },
})(Button);

const CustomTypography = withStyles({
  root: {
    color: "#6e5d34",
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 12),
    paddingTop: "85px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "100%",
  },
}));

const cards = [1];

export default function ProposeTrade(props) {
  const classes = useStyles();
  const { listingId } = useParams();
  const history = useHistory();

  const [message, setMessage] = useState("");
  function onMessageChange(event) {
    setMessage(event.target.value);
  };

  const currentUserListings = props.listings.filter(
    (listing) => listing.user.id === 2
  );
  // hard-coding current user's id for now

  const [offeredListingId, setOfferedListingId] = useState(
    currentUserListings[0].id
  );
  const [offeredListingName, setofferedListingName] = useState(
    currentUserListings[0].name
  );
  const [offeredListingPicture, setofferedListingPicture] = useState(
    currentUserListings[0].picture
  );
  const wantedListingName = props.listings.find(
    (listing) => listing.id === Number(listingId)
  ).name;
  const wantedListingPicture = props.listings.find(
    (listing) => listing.id === Number(listingId)
  ).picture;
  const [submitting, setSubmitting] = useState(false);

  function selectListingToOffer(id) {
    setOfferedListingId(id);
    setofferedListingName(
      currentUserListings.find((listing) => listing.id === id).name
    );
    setofferedListingPicture(
      currentUserListings.find((listing) => listing.id === id).picture
    );
  }

  function offerTrade(event) {
    event.preventDefault();
    props.propose(listingId, offeredListingId, message);
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      history.push(`/proposals`);
    }, 3000);
  }

  return (
    <>
      <CssBaseline />
      {submitting ? (
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={10}>
            <CustomTypography
              variant="subtitle1"
              align="justify"
              style={{
                backgroundColor: "#e9c46a",
                border: "2.5px solid #4958b6",
                padding: "30px",
                borderRadius: "10px",
                margin: "80% 6.5% 0% 6.5%",
              }}
            >
              Trade successfully proposed. <strong>Best of luck.</strong>
            </CustomTypography>
          </Grid>
        </Grid>
      ) : (
        <div className={classes.heroContent}>
          <Typography variant="h6" align="left" color="textPrimary" paragraph>
            Propose a trade
          </Typography>

          <Container maxWidth="md">
            <Grid
              container
              spacing={1}
              direction="row"
              alignItems="center"
              justify="space-evenly"
              className={classes.root}
            >
              {cards.map((card) => (
                <>
                  <Grid className="grid" item key={card} xs={5} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={offeredListingPicture}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography color="textSecondary" variant="subtitle1">
                          {offeredListingName}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item key={card} xs={2} sm={2} md={4}>
                    <AutorenewIcon style={{ fontSize: 35 }} color="primary" />
                  </Grid>
                  <Grid item key={card} xs={5} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={wantedListingPicture}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography color="textSecondary" variant="subtitle1">
                          {wantedListingName}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              ))}
            </Grid>
            <div className="separation"></div>
            <Carousel>
              {currentUserListings.map((listing) => (
                <div>
                  <h3
                    onClick={() => selectListingToOffer(listing.id)}
                    style={{
                      height: "160px",
                      lineHeight: "160px",
                      textAlign: "center",
                      backgroundImage: `url(${listing.picture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></h3>
                </div>
              ))}
            </Carousel>
            <p></p>
            <form className={classes.form} noValidate>
              <TextField
                id="outlined-multiline-static"
                fullWidth
                rows={2}
                label="Add a message (optional)"
                variant="outlined"
                onChange={onMessageChange}
                value={message}
              />
              <div className="separation"></div>
              <Grid container spacing={0} direction="row" justify="flex-end">
                <Grid item xs={6}>
                  <BootstrapButton2
                    type="submit"
                    style={{ marginLeft: "18px" }}
                    variant="contained"
                    color="primary"
                    disableRipple
                    onClick={offerTrade}
                  >
                    Propose a trade!
                  </BootstrapButton2>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      )}
    </>
  );
}
