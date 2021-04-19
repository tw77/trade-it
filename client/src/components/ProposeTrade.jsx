import React , { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./ProposeTrade.css";
import { useParams, useHistory } from 'react-router-dom'
import { Carousel } from 'antd';

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

  const [message, setMessage] = useState("")
  const onMessageChange = function(event) {
    setMessage(event.target.value);
  };

  console.log('props.proposals', props.proposals);

  // const mergedProposals = [].concat.apply([], props.proposals);

  const currentUserListings = props.listings.filter((listing) => listing.user.id === 2);
  // hard-coding current user's id for now

  const [offeredListingId, setOfferedListingId] = useState(currentUserListings[0].id);
  const [offeredListingName, setofferedListingName] = useState(currentUserListings[0].name);
  const [offeredListingPicture, setofferedListingPicture] = useState(currentUserListings[0].picture);
  const wantedListingName = props.listings.find((listing) => listing.id === Number(listingId)).name;
  const wantedListingPicture = props.listings.find((listing) => listing.id === Number(listingId)).picture;

  function selectListingToOffer(id) {
    setOfferedListingId(id);
    setofferedListingName(currentUserListings.find((listing) => listing.id === id).name);
    setofferedListingPicture(currentUserListings.find((listing) => listing.id === id).picture);
  };

  function offerTrade(event) {
    event.preventDefault();
    props.propose(listingId, offeredListingId, message)
    history.push(`/proposals`)
  };


  return (
    <>
      <CssBaseline />
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
              <h3 onClick={() => selectListingToOffer(listing.id)} style={{
                height: '160px',
                lineHeight: '160px',
                textAlign: 'center',
                backgroundImage: `url(${listing.picture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></h3>
              </div>
          ))}
            </Carousel>
          <p></p>
          <form className={classes.form} noValidate>
            <TextField
              id="outlined-multiline-static"
              required
              fullWidth
              rows={2}
              name="message"
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
                style={{ marginTop: "8px" }}
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
    </>
  );
}