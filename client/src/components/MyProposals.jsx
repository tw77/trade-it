import React from "react";
import {
  Grid,
  Card,
  CardContent,
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
  },
  heroContent: {
    padding: theme.spacing(8, 0, 14),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function MyProposals(props) {
  const classes = useStyles();

  // const {userId} = useParams();

  // useEffect(() => {
  //   axios.get(`users/${userId}/proposals`)
  // }, [userId]);

  // function accept(){};

  // function decline(){};

  // function cancelOrRemove(){};

  // "View" button links to {AcceptedProposal}
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h5" align="left" color="textPrimary" paragraph>
          Proposals
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
                <Grid item key={card} xs={1}>
                  <AutorenewIcon style={{ fontSize: 20 }} color="primary" />
                </Grid>
                <Grid item key={card} xs={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="h3"
                      >
                        Heading
                      </Typography>
                      {/* <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography> */}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item key={card} xs={3}>
                  <Typography gutterBottom variant="h7">
                    2 days ago
                  </Typography>
                  {true ? (
                    <>
                      <BootstrapButton2
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.margin}
                      >
                        Accept
                      </BootstrapButton2>
                      <BootstrapButton
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classes.margin}
                      >
                        Decline
                      </BootstrapButton>
                    </>
                  ) : (
                    <BootstrapButton3
                      variant="contained"
                      color="primary"
                      disableRipple
                      className={classes.margin}
                    >
                      View
                    </BootstrapButton3>
                  )}
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
