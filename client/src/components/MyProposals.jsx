import React , { useState } from 'react';
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
    backgroundColor: "#CA302D",
    borderColor: "#CA302D",
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
      backgroundColor: "#BA262B",
      borderColor: "#BA262B",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#CA302D",
      borderColor: "#CA302D",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
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
    backgroundColor: "#27B376",
    borderColor: "#27B376",
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
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#006F3C",
      borderColor: "#006F3C",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
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
    backgroundColor: "#F9A83E",
    borderColor: "#F9A83E",
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
      backgroundColor: "#EDCF3C",
      borderColor: "#EDCF3C",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#EDCF3C",
      borderColor: "#EDCF3C",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
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
    margin: theme.spacing(1),
  },
}));

export default function MyProposals(props) {
  const classes = useStyles();
  const history = useHistory();

  const mergedProposals = [].concat.apply([], props.proposals);
  const userId = 2; // for now
  const currentUserProposals = mergedProposals.filter((proposal) => proposal.user_id === userId);

  const offeredItemIds = currentUserProposals.map((proposal) => proposal.listing_id);
  const offeredItemListings = props.listings.filter((listing) => offeredItemIds.includes(listing.id));
  const offeredItemPictures = offeredItemListings.map((offeredItem) => offeredItem.picture);

  const wantedItemIds = currentUserProposals.map((proposal) => proposal.asset_id);
  const wantedItemListings = props.listings.filter((listing) => wantedItemIds.includes(listing.id)).reverse();
  const wantedItemPictures = wantedItemListings.map((wantedItem) => wantedItem.picture);

  function accept(id){
    const updatedProposal = {
      ...currentUserProposals[id],
      is_accepted: true
    };
    props.updateProposalStatus(updatedProposal);
  };

  function decline(id){};

  function view(id){
    id++;
    history.push(`accepted/${id}`)
  };

  const cards = Array.from(Array(currentUserProposals.length).keys()) // an index counting the user's proposals from 0

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
            {cards.map((card) => (
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
                  <AutorenewIcon style={{ fontSize: 20 }} color="primary" />
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
                  {currentUserProposals[card].is_accepted ? `Trade accepted!` : `2 days ago`}
                  </Typography>
                  {currentUserProposals[card].is_accepted ? (
                    <BootstrapButton3
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                      onClick={() => view(card)}
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
            {cards.map((card) => (
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
                  <AutorenewIcon style={{ fontSize: 20 }} color="primary" />
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
                  Accepted
                  </Typography>
                    <BootstrapButton3
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                      onClick={() => view(card)}
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
