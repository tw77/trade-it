import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  CircularProgress,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import useApplicationData from "../hooks/useApplicationData";
import fakeListingsData from "../mockData/fakeListingsData";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import "./ProposeTrade.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 0),
    paddingTop: "80px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
}));

const cards = [1];

export default function ProposeTrade() {
  const classes = useStyles();

  const fakeWantedItem = [
    {
      id: 1,
      name: "Linen shirt, M",
      description: "Rarely-worn light blue linen shirt, very comfortable",
      picture:
        "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
      owner_id: 3,
      storer_id: 3,
      category_id: 2,
    },
  ];

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

  // const {userId} = useParams();

  // // can the data for the wanted item be passed in here from {Listing}?
  // // also, is it necessary to include a get request to the current user's listings here?

  // function sendProposal(){
  //   // includes axios.post(`users/${userId}/proposals`)
  // };

  // back naviagation with a "Cancel" button?

  return (
    <>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Typography variant="h5" align="left" color="textPrimary" paragraph>
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
                    <Typography gutterBottom variant="h5" component="h2">
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
                    <Typography gutterBottom variant="h5" component="h2">
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
          <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li id="carousel__slide1"
                  tabindex="0"
                  className="carousel__slide">
                <div className="carousel__snapper">
                  <a href="#carousel__slide4"
                    className="carousel__prev">Go to last slide</a>
                  <a href="#carousel__slide2"
                    className="carousel__next">Go to next slide</a>
                </div>
              </li>
              <li id="carousel__slide2"
                  tabindex="0"
                  className="carousel__slide">
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide1"
                  className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide3"
                  className="carousel__next">Go to next slide</a>
              </li>
              <li id="carousel__slide3"
                  tabindex="0"
                  className="carousel__slide">
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide2"
                  className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide4"
                  className="carousel__next">Go to next slide</a>
              </li>
              <li id="carousel__slide4"
                  tabindex="0"
                  className="carousel__slide">
                <div className="carousel__snapper"></div>
                <a href="#carousel__slide3"
                  className="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide1"
                  className="carousel__next">Go to first slide</a>
              </li>
            </ol>
            <aside className="carousel__navigation">
              <ol className="carousel__navigation-list">
                <li className="carousel__navigation-item">
                  <a href="#carousel__slide1"
                    className="carousel__navigation-button">Go to slide 1</a>
                </li>
                <li className="carousel__navigation-item">
                  <a href="#carousel__slide2"
                    className="carousel__navigation-button">Go to slide 2</a>
                </li>
                <li className="carousel__navigation-item">
                  <a href="#carousel__slide3"
                    className="carousel__navigation-button">Go to slide 3</a>
                </li>
              </ol>
            </aside>
          </section>
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
            >
              Propose a trade!
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
}
