import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  Button,
  Container,
  CssBaseline,
} from "@material-ui/core";
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
    fontFamily: ["Roboto", "sans-serif"].join(","),
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
    fontFamily: ["Roboto", "sans-serif"].join(","),
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
  cardMedia: {
    paddingTop: "100%",
  },
  margin: {
    marginTop: "5px",
  },
}));

export default function MySuggestions(props) {
  const classes = useStyles();

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
          Immediate trades
        </Typography>

        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            className={classes.root}
          >
            <Grid item key={1} xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://i.pinimg.com/originals/85/3c/a5/853ca5734e9f0f7aeca157efa3bf32af.jpg"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={1} xs={1}>
              <AutorenewIcon style={{ fontSize: 20, color: "#404a8a" }} />
            </Grid>
            <Grid item key={1} xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Image title"
                />
              </Card>
            </Grid>

            <Grid item key={1} xs={3}>
              <GroupIcon fontSize="large" style={{ paddingLeft: "3px" }} />
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

            <Grid item key={1} xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/3945349/pexels-photo-3945349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={1} xs={1}>
              <AutorenewIcon style={{ fontSize: 20, color: "#404a8a" }} />
            </Grid>
            <Grid item key={1} xs={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  title="Image title"
                />
              </Card>
            </Grid>

            <Grid item key={1} xs={3}>
              <GroupIcon fontSize="large" style={{ paddingLeft: "3px" }} />
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
          Make an initial trade, then trade for the listing you want!
        </Typography>

        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            className={classes.root}
          >
            <Grid item key={1} xs={2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/433098/pexels-photo-433098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={1} xs={1}>
              <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
            </Grid>
            <Grid item key={1} xs={2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/6802972/pexels-photo-6802972.jpeg?cs=srgb&dl=pexels-vlada-karpovich-6802972.jpg&fm=jpg"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={1} xs={1}>
              <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
            </Grid>
            <Grid item key={1} xs={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={1} xs={3}>
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

            <Grid item key={2} xs={2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://i.pinimg.com/originals/85/3c/a5/853ca5734e9f0f7aeca157efa3bf32af.jpg"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={2} xs={1}>
              <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
            </Grid>
            <Grid item key={2} xs={2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/116915/pexels-photo-116915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={2} xs={1}>
              <AutorenewIcon style={{ fontSize: 20, color: "#4958b6" }} />
            </Grid>
            <Grid item key={2} xs={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item key={2} xs={3}>
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
          </Grid>
        </Container>
      </div>
    </>
  );
}
