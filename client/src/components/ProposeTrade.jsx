import React , { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./ProposeTrade.css";
import { useParams, useHistory } from 'react-router-dom'
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  alignItems: 'center',
  textAlign: 'center'
  // background: '#364d79',
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 0),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
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

  const mergedProposals = [].concat.apply([], props.proposals);

  const currentUserListings = props.listings.filter((listing) => listing.user.id === 2);
  // hard-coding current user's id for now

  const [offeredListingId, setOfferedListingId] = useState(currentUserListings[0].id);
  const [offeredListingPicture, setofferedListingPicture] = useState(currentUserListings[0].picture);
  const wantedListingPicture = props.listings.find((listing) => listing.id === Number(listingId)).picture;

  function selectListingToOffer(id) {
    setOfferedListingId(id);
    setofferedListingPicture(currentUserListings.find((listing) => listing.id === id).picture)
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
          Propose a trade!
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
                    <Typography gutterBottom variant="h7" component="h3">
                      Heading
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
                    <Typography gutterBottom variant="h7" component="h3">
                      Heading
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
              label="Add a message (optional)"
              required
              fullWidth
              multiline
              rows={2}
              name="message"
              label="Add a message (optional)"
              variant="outlined"
              onChange={onMessageChange}
              value={message}
            />  
          <div className="separation"></div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={offerTrade}
            >
              Propose a trade!
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
}

