import React from "react";
import { useParams } from 'react-router-dom'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { green } from "@material-ui/core/colors";
import { Rate } from 'antd';

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

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 15,
    padding: "4px 8px",
    paddingRight: "17px",
    paddingLeft: "17px",
    border: "1px solid",
    lineHeight: 1,
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
    fontSize: 15,
    padding: "4px 8px",
    border: "1px solid",
    lineHeight: 1,
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
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

export default function AcceptedProposal() {
  const classes = useStyles();
  const fakeProposalData = {
    id: 2,
    message: "Hope to hear from you soon!",
    is_accepted: null,
    date_accepted: null,
    listing_id: 5,
    user_id: 2,
    asset_id: 1,
    status_id: 1,
    wanted: {
      id: 1,
      name: "Linen shirt, M",
      description: "Rarely-worn light blue linen shirt, very comfortable",
      picture:
        "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
      owner_id: 3,
      storer_id: 3,
      category_id: 2,
    },
    offered: {
      id: 5,
      name: "Milk and Honey",
      description: "Author: Rupi Kaur",
      picture:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      owner_id: 2,
      storer_id: 2,
      category_id: 3,
    },
  };

  const { proposalId } = useParams();

  // useEffect(() => {
  //   axios.get(`users/${userId}/proposals/${proposalId}`)
  // }, [userId, proposalId]);

  // function confirmTrade(){};

  // function confirmPickUp(){};

  // function publishReview(){};

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h6" align="left" color="textPrimary" paragraph>
          Trade proposal acceped!
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
            <Grid className="grid" item xs={5} sm={6} md={4}>
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
            <Grid item xs={2} sm={2} md={4}>
              <AutorenewIcon style={{ fontSize: 35 }} color="primary" />
            </Grid>
            <Grid item xs={5} sm={6} md={4}>
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
          </Grid>
          {/* <div className="separation"> */}
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="space-around"
            style={{ paddingTop: "10px" }}
          >
            <Grid item xs={5} sm={6} md={4}>
              <PermContactCalendarIcon
                color="action"
                style={{ marginLeft: "70px", color: green[500], fontSize: 80 }}
              />
              {/* </div> */}
            </Grid>
            <Grid item xs={5} sm={6} md={4}>
              <Typography align="left" gutterBottom variant="h7" component="h3">
                Name
              </Typography>
              <Typography align="left" gutterBottom variant="h7" component="h3">
                email
              </Typography>
              <Typography align="left" gutterBottom variant="h7" component="h3">
                phoneNumber
              </Typography>
            </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              direction="row"
              justify="space-evenly"
              style={{ padding: "10px", paddingRight:"50px" }}
            >
              <Grid item xs={3} spacing={3}>
                <BootstrapButton2
                  variant="contained"
                  color="primary"
                  disableRipple
                >
                  Trade Confirmed
                </BootstrapButton2>
              </Grid>
              <Grid item xs={3} spacing={3}>
                <BootstrapButton
                  variant="contained"
                  color="primary"
                  disableRipple
                >
                  Confirm pick-up
                </BootstrapButton>
              </Grid>
            </Grid>
          
          <Typography variant="h6" color="textPrimary">
            Leave a review
        </Typography>
        <Rate />
          <form className={classes.form} noValidate>
            <TextField
              id="outlined-multiline-static"
              required
              fullWidth
              multiline
              rows={2}
              label="Review"
              variant="outlined"
            />
            <div className="separation"></div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Publish
            </Button>
          </form>
         
        </Container>
      </div>
    </>
  );
}
