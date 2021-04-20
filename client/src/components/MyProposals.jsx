import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Grid,
  Card,
  Typography,
} from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./ProposeTrade.css";
import {
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#e76f51",
    borderColor: "#e76f51",
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
      backgroundColor: "#e76f51",
      borderColor: "#e76f51",
      boxShadow: "none",
    },
    // "&:active": {
    //   boxShadow: "none",
    //   backgroundColor: "#e76f51",
    //   borderColor: "#e76f51",
    // },
  },
})(Button);

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
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
    "&:hover": {
      backgroundColor: "#006F3C",
      borderColor: "#006F3C",
      boxShadow: "none",
    },
  },
})(Button);

const BootstrapButton3 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#4958b6",
    borderColor: "#4958b6",
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#EDCF3C",
      borderColor: "#EDCF3C",
      boxShadow: "none",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "20px",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 14),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "100%",
  },
  margin: {
    marginTop: "5px",
  },
}));

export default function MyProposals(props) {
  const classes = useStyles();
  const history = useHistory();

  const mergedProposals = [].concat.apply([], props.proposals);
  const userId = 2; // for now





  const currentUserProposals = mergedProposals.filter((proposal) => proposal.user_id === userId);
  // console.log('currentUserProposals', currentUserProposals);

  const offeredItemIds = currentUserProposals.map((proposal) => proposal.listing_id);

  function findOfferedListings(offeredItemIds) {
    let allOfferedListings = [];
    let offeredItem;
    for (const id of offeredItemIds) {
      offeredItem = props.listings.find((listing) => listing.id === id)
      allOfferedListings.push(offeredItem)
    }
    return allOfferedListings;
  }

  const offeredItemListings = findOfferedListings(offeredItemIds)
  const offeredItemPictures = offeredItemListings.map((offeredItem) => offeredItem.picture);

  const wantedItemIds = currentUserProposals.map((proposal) => proposal.asset_id);

  function findWantedListings(wantedItemIds) {
    let allWantedListings = [];
    let wantedItem;
    for (const id of wantedItemIds) {
      wantedItem = props.listings.find((listing) => listing.id === id)
      allWantedListings.push(wantedItem)
    }
    return allWantedListings;
  }

  const wantedItemListings = findWantedListings(wantedItemIds);
  const wantedItemPictures = wantedItemListings.map((wantedItem) => wantedItem.picture);

  // console.log('mergedProposals', mergedProposals);
  // console.log('offeredItemIds', offeredItemIds);
  // console.log('wantedItemIds', wantedItemIds);
  // console.log('offeredItemListings', offeredItemListings);
  // console.log('wantedItemListings', wantedItemListings);








  const tradesProposedToMe = mergedProposals.filter((proposal) => offeredItemIds.includes(proposal.asset_id));
  // console.log('tradesProposedToMe', tradesProposedToMe);

  const offeredToMeIds = tradesProposedToMe.map((proposal) => proposal.listing_id);
  // console.log('itemOfferedToMeIds', offeredToMeIds);

  function findListingsOfferedToMe(offeredToMeIds) {
    let allListingsOfferedToMe = [];
    let offeredItem;
    for (const id of offeredToMeIds) {
      offeredItem = props.listings.find((listing) => listing.id === id)
      allListingsOfferedToMe.push(offeredItem)
    }
    return allListingsOfferedToMe;
  }

  const offeredToMeListings = findListingsOfferedToMe(offeredToMeIds)
  const offeredToMePictures = offeredToMeListings.map((offeredItem) => offeredItem.picture);

  const listingsTheyWantIds = tradesProposedToMe.map((proposal) => proposal.asset_id);
  // console.log('listingsTheyWantIds', listingsTheyWantIds);

  function listingsTheyWant(listingsTheyWantIds) {
    let allListingsTheyWant = [];
    let wantedItem;
    for (const id of listingsTheyWantIds) {
      wantedItem = props.listings.find((listing) => listing.id === id)
      allListingsTheyWant.push(wantedItem)
    }
    return allListingsTheyWant;
  }

  const wantedFromMyListings = listingsTheyWant(listingsTheyWantIds);
  const wantedFromMyPictures = wantedFromMyListings.map((wantedItem) => wantedItem.picture);









  function accept(card){
    const updatedProposal = {
      ...tradesProposedToMe[card],
      is_accepted: true
    };
    props.updateProposalStatus(updatedProposal);
  };

  function decline(id){};

  function viewProposalTheyAccepted(card){
    history.push(`accepted/${currentUserProposals[card].id}`)
  };

  function viewProposalIAccepted(card){
    history.push(`accepted/${tradesProposedToMe[card].id}`)
  };








  const tradesIProposedCards = Array.from(Array(currentUserProposals.length).keys()); // an index counting the user's proposals from 0
  const tradesProposedToMeCards = Array.from(Array(tradesProposedToMe.length).keys());

  // console.log('tradesIProposedCards', tradesIProposedCards);
  // console.log('tradesProposedToMeCards', tradesProposedToMeCards);


  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h5" align="left" color="textPrimary">
          Proposals
        </Typography>
        <Typography variant="subtitle1" align="left" color="textSecondary" paragraph>
        Trades proposed to me
        </Typography>

        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            // justify="space-evenly"
            className={classes.root}
          >
            {tradesProposedToMeCards.map((card) => (
              <>
                <Grid item key={card} xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={wantedFromMyPictures[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item key={card} xs={1}>
                  <AutorenewIcon style={{ fontSize: 20, color: '#4958b6' }} />
                </Grid>
                <Grid item key={card} xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={offeredToMePictures[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item key={card} xs={3}>
                  <Typography gutterBottom variant="h7">
                  {tradesProposedToMe[card].is_accepted ? `Trade accepted!` : `2 days ago`}
                  </Typography>
                  {tradesProposedToMe[card].is_accepted ? (
                    <BootstrapButton3
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                      onClick={() => viewProposalIAccepted(card)}
                    >
                      View
                    </BootstrapButton3>
                  ) : (
                    <>
                      <BootstrapButton2
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.margin}
                        onClick={() => accept(card)}
                      >
                        Accept
                      </BootstrapButton2>
                      <BootstrapButton
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.margin}
                        onClick={() => decline(card)}
                      >
                        Decline
                      </BootstrapButton>
                    </>
                  )}
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
        <Typography variant="subtitle1" align="left" color="textSecondary" paragraph>
        Trades I've proposed
        </Typography>

        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            // justify="space-evenly"
            className={classes.root}
          >
            {tradesIProposedCards.map((card) => (
              <>
                <Grid item key={card} xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={offeredItemPictures[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item key={card} xs={1}>
                  <AutorenewIcon style={{ fontSize: 20, color: '#4958b6' }} />
                </Grid>
                <Grid item key={card} xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={wantedItemPictures[card]}
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item key={card} xs={3}>
                  <Typography gutterBottom variant="h7">
                  {currentUserProposals[card].is_accepted ? `Accepted` : `Pending`}
                  </Typography>
                    <BootstrapButton3
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                      onClick={() => viewProposalTheyAccepted(card)}
                    >
                      View
                    </BootstrapButton3>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
