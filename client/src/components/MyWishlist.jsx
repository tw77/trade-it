import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {
  Grid,
  Typography,
  TextField,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import "./MyWishlist.css";
import { Carousel } from "antd";
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
  heroContent: {
    marginBottom: theme.spacing(2),
    paddingTop: "5px",
  },
}));

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

export default function MyWishlist(props) {
  const classes = useStyles();
  
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

  const userId = 2; // for now
  const mergedWishes = [].concat.apply([], props.wishes);
  const userWishes = mergedWishes.filter((wish) => wish.user_id === userId);

  const userWishCategories = userWishes.map((wish) => wish.category_id);

  function findMostRepresented(userWishCategories) {
    const frequency = {};

    userWishCategories.forEach(function(id) { frequency[id] = 0; });

    const uniques = userWishCategories.filter(function(id) {
        return ++frequency[id] == 1;
    });

    return uniques.sort(function(a, b) {
        return frequency[b] - frequency[a];
    });
  }

  const relevantListings = props.listings.filter(
    (listing) => listing.owner_id !== userId && 
    listing.category_id === findMostRepresented(userWishCategories)[0])
    .slice(0, 5);


  const [wishName, setWishName] = useState("")
  const handleChange = function(event) {
    setWishName(event.target.value);
  };

  const [wishCategory, setWishCategory] = useState(null)
  const categorySelect = function(event) {
    setWishCategory(event.target.value);
  };

  function addWish(event){
    event.preventDefault();
    const newWish = {
      id: props.wishes.length + 1,
      name: wishName,
      category_id: wishCategory,
      user_id: userId
    }
    props.updateWishes(newWish);
  };

  // function removeWish(){};
  
  const cards = Array.from(Array(userWishes.length).keys()); // an index counting the user's wishes from 0
  
  return (
    <>
      <CssBaseline />
      <div className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <Typography variant="h5" align="left" color="textPrimary">
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
              <Grid item xs={9} style={{ marginBottom: "0px" }}>
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
              <Grid item xs={3}>
                <BootstrapButton2
                  style={{ marginTop: '8px' }}
                  variant="contained"
                  color="primary"
                  disableRipple
                  className={classes.margin}
                  onClick={addWish}
                >
                  Add Item
                </BootstrapButton2>
              </Grid>
            </Grid>
          </form>
          <Typography variant="h5" align="left" color="textPrimary">
            My Whishlist
          </Typography>
          <Grid
            container
            alignItems="center"
            spacing={0}
            direction="row"
            // justify="center"
          >
            {cards.map((card) => (
              <>
                <Grid item  xs={9}>
                  <Typography variant="h7" component="h3">
                    {userWishes[card].name}
                  </Typography>
                </Grid>
                <Grid item  xs={3}>
                  <IconButton color="secondary">
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </>
            ))}
          </Grid>
          {relevantListings ? (
            <>
              <Typography variant="h5" align="left" color="textPrimary" paragraph>
                Explore related listings
              </Typography>
              <Carousel>
                {relevantListings .map((listing) => (
                  <div>
                    <h3
                      style={{
                        height: "160px",
                        lineHeight: "160px",
                        textAlign: "center",
                        backgroundImage: `url(${listing.picture})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></h3>
                  </div>
                ))}
              </Carousel>
            </>
          ) : (
            <div className={classes.progress}>
              <CircularProgress />
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
