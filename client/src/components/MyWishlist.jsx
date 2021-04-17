import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "./MyWishlist.css";
import ImageCarousel2 from "./ImageCarousel";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(8, 0, 14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "100px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "grey",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heroContent: {
    marginBottom: theme.spacing(2),
    paddingTop: "5px",
  },
}));

export default function MyWishlist() {
  const classes = useStyles();
  const fakeWishesDataForUser = [
    {
      id: 1,
      name: "Bluetooth speakers",
      category_id: 1,
      user_id: 1,
    },
  ];

  console.log("wishlist");

  // const {userId} = useParams();

  // useEffect(() => {
  //   axios.get(`users/${userId}/wishes`)
  // }, [userId]);
  // /* do we need a get request to all listings here too, or can that data just be passed in?
  // (for the "Explore related listings" carousel on the bottom) */

  // function addWish(){};

  // function removeWish(){};

  const cards = [1, 2, 3];
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
        backgroundColor: "#BA262B",
        borderColor: "#BA262B",
      },
      "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
      },
    },
  })(Button);

  return (
    <>
      <CssBaseline />
      <div className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Add an item to your wishlist
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              id="select"
              label="Category *"
              type="category"
              fullWidth
              margin="normal"
              select
              size="small"
              style={{ height: '18px' }}
            />

            <Grid
              container
              spacing={2}
              direction="row"
              alignItems="center"
              // justify="space-evenly"
              className={classes.heroContent}
            >
              <Grid item xs={8} style={{ marginBottom: '0px' }}>
                <TextField
                  size="small"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="outlined-basic"
                  label="Item name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Item
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography component="h1" variant="h5">
            My Whishlist
          </Typography>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-between"
            className={classes.heroContent}
          >
            {cards.map((card) => (
              <>
                <Grid item key={card} xs={9}>
                  <Typography variant="h7" component="h3">
                    Item name / Category
                  </Typography>
                </Grid>
                <Grid item key={card} xs={3}>
                  <BootstrapButton
                    variant="contained"
                    color="primary"
                    disableRipple
                    className={classes.margin}
                  >
                    X
                  </BootstrapButton>
                </Grid>
              </>
            ))}
          </Grid>
          <Typography component="h1" variant="h5">
            Explore related listings
          </Typography>
          <ImageCarousel2 />
          
        </Container>
      </div>
    </>
  );
}
