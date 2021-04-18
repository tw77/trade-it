import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  Grid,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "./MyWishlist.css";
import ImageCarousel2 from "./ImageCarousel";
import { Carousel } from 'antd';
import MenuItem from '@material-ui/core/MenuItem';

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

export default function MyWishlist(props) {
  const classes = useStyles();
  const fakeWishesDataForUser = [
    {
      id: 1,
      name: "Bluetooth speakers",
      category_id: 1,
      user_id: 1,
    },
  ];

  const categories = [
    {
      value: 1,
      label: 'Electronics',
    },
    {
      value: 2,
      label: 'Clothing',
    },
    {
      value: 3,
      label: 'Books',
    },
    {
      value: 4,
      label: 'Furniture',
    },
    {
      value: 5,
      label: 'Appliances',
    },
    {
      value: 6,
      label: 'Cars',
    },
    {
      value: 7,
      label: 'Bicycles',
    },
    {
      value: 8,
      label: 'Carpets',
    },
    {
      value: 9,
      label: 'Plants',
    },
    {
      value: 10,
      label: 'Instruments',
    },
  ];

  console.log('props.wishes', props.wishes);

  const userId = 2; // for now
  const mergedWishes = [].concat.apply([], props.wishes);
  const userWishes = mergedWishes.filter((wish) => wish.user_id === userId);
  console.log('mergedWishes', mergedWishes);
  console.log('userWishes', userWishes);

  // const userWishCategories = userWishes.map((wish) => wish.category_id);
  // console.log('userWishCategories', userWishCategories);
  // // sort by most represented

  // function findMostRepresented(userWishCategories) {
  //   const frequency = {};

  //   userWishCategories.forEach(function(id) { frequency[id] = 0; });

  //   const uniques = userWishCategories.filter(function(id) {
  //       return ++frequency[id] == 1;
  //   });

  //   return uniques.sort(function(a, b) {
  //       return frequency[b] - frequency[a];
  //   });
  // }

  // const relevantListings = props.listings.filter(
  //   (listing) => listing.owner_id !== userId && 
  //   listing.category_id === findMostRepresented(userWishCategories)[0])
  //   .slice(0, 5);

  // console.log('relevantListings', relevantListings)


  // const [wishName, setWishName] = useState("")
  // const handleChange = function(event) {
  //   setWishName(event.target.value);
  // };

  // const [wishCategory, setWishCategory] = useState(null)
  // const categorySelect = function(event) {
  //   setWishCategory(event.target.value);
  // };

  // function addWish(event){
  //   event.preventDefault();
  //   const newWish = {
  //     id: props.wishes.length + 1,
  //     name: wishName,
  //     category_id: wishCategory,
  //     user_id: userId
  //   }
  //   props.updateWishes(newWish);
  // };

  // function removeWish(){};

  const cards = Array.from(Array(userWishes.length).keys()) // an index counting the user's wishes from 0

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
            size="small"
            name="category"
            style={{ height: '18px' }}
            select onChange={categorySelect} >
            {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} 
          </TextField>

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
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={addWish}
                >
                  Add Item
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography component="h1" variant="h5">
            My Wishlist
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
                    {userWishes[card].name}
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
          {props.listings ? (
            <>
          <Typography component="h1" variant="h5">
            Explore related listings
          </Typography>
          <Carousel>
          {props.listings.map((listing) => (
              <div>
              <h3 style={{
                height: '160px',
                lineHeight: '160px',
                textAlign: 'center',
                backgroundImage: `url(${listing.picture})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></h3>
            </div>
          ))}
              </Carousel>
              </>
          ) : (
            <div className={classes.progress}>
            <CircularProgress/>
            </div>
          )}
          
        </Container>
      </div>
    </>
  );
}
