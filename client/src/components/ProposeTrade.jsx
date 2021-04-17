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
import ImageCarousel from "./ImageCarousel";
import { useParams, useHistory } from 'react-router-dom'


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

  console.log('props.proposals', props.proposals);

  const mergedProposals = [].concat.apply([], props.proposals);

  const wantedListing = props.listings.find((listing) => listing.id === Number(listingId));

  const [offeredListing, setOfferedListing] = useState();

  const newProposal = {};


  const fakeWantedItem = {
      id: 1,
      name: "Linen shirt, M",
      description: "Rarely-worn light blue linen shirt, very comfortable",
      picture:
        "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
      owner_id: 3,
      storer_id: 3,
      category_id: 2,
    };

  const fakeListingsForUser = [
    {
      id: 4,
      name: "Old school Game Boy Color",
      picture:
        "https://images.unsplash.com/photo-1525799894461-3cfe39b72d69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
    {
      id: 5,
      name: "Milk and Honey",
      picture:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    },
  ];

  
  function offerTrade(event) {
    event.preventDefault();
    props.propose(fakeWantedItem, fakeListingsForUser[0], 'hi')
  };

  // back naviagation with a "Cancel" button?

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
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      Heading
                    </Typography>
                    {/* <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography> */}
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
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h7" component="h3">
                      Heading
                    </Typography>
                    {/* <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography> */}
                  </CardContent>
                </Card>
              </Grid>
            </>
          ))}
          </Grid>
          <div className="separation"></div>
          <ImageCarousel />
          <p></p>
          <form className={classes.form} noValidate>
            <TextField
              id="outlined-multiline-static"
              label="Add a message (optional)"
              required
              fullWidth
              multiline
              rows={2}
              label="Description"
              variant="outlined"
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

