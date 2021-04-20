import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography } from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import GroupIcon from "@material-ui/icons/Group";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "2px 13px",
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
  },
})(Button);

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 12,
    padding: "2px 4px",
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
    padding: theme.spacing(8, 0, 14),
    paddingTop: "100px",
  },
  // cardContent: {
  //   flexGrow: 1,
  // },
  cardMedia: {
    // paddingTop: "56.25%", // 16:9
    paddingTop: "100%", // 16:9
  },
  margin: {
    marginTop: "5px",
  },
}));

export default function MySuggestions(props) {
  const classes = useStyles();
  const cards = [1, 2];
  const cards2 = [1, 2];

  // const {userId} = useParams(); <--- would this be replaced by useState or no?

  // "Propose a trade!" button links to {ProposeTrade}
  // "Dismiss" removes suggestion from view (all client-side)

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h5" align="left" color="textPrimary">
          Suggestions
        </Typography>
        <Typography variant="subtitle1" align="left" color="textSecondary">
          Inmediate trades
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
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item key={card} xs={1}>
                  <AutorenewIcon style={{ fontSize: 20, color: '#404a8a' }} />
                </Grid>
                <Grid item key={card} xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Card>
                </Grid>
                
                <Grid item key={card} xs={3}>
                  <GroupIcon fontSize="large" style={{ paddingLeft: '3px' }} />
                  <BootstrapButton2
                    variant="contained"
                    color="primary"
                    disableRipple
                    className={classes.margin}
                  >
                    Propose a trade!
                  </BootstrapButton2>
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    disableRipple
                    className={classes.margin}
                  >
                    Dismiss
                  </BootstrapButton>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
        <Typography variant="subtitle1" align="left" color="textSecondary">
          Two-part trades
        </Typography>
        <Typography
          variant="caption text"
          align="left"
          color="textSecondary"
          paragraph
        >
          Make an initial trade, then trade for the item you want!
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
            {cards2.map((card2) => (
              <>
                <Grid item key={card2} xs={2}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Card>
                  </Grid>
                  <Grid item key={card2} xs={1}>
                    <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
                  </Grid>
                <Grid item key={card2} xs={2}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Card>
                </Grid>
                  <Grid item key={card2} xs={1}>
                  <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
                </Grid>
                <Grid item key={card2} xs={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Card>
                </Grid>
                <Grid item key={card2} xs={3} >
                  {/* <GroupIcon fontSize="large" style={{ paddingLeft: '10px' }} /> */}
                  <BootstrapButton2
                    variant="contained"
                    color="primary"
                    disableRipple
                    className={classes.margin}
                  >
                    Propose trade!
                  </BootstrapButton2>
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    disableRipple
                    className={classes.margin}
                  >
                    Dismiss
                  </BootstrapButton>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
