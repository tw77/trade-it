import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  Container,
  Button,
  CssBaseline,
  MenuItem,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import "./MyWishlist.css";
import { Carousel } from "antd";

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
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
})(Button);

export default function MyWishlist(props) {
  const classes = useStyles();
  const history = useHistory();
  const userId = 2; // for now
  const wishesNotNull = props.wishes.filter((wish) => wish);
  let userWishes;
  let userWishCategories;
  let relevantListings;
  let relevantAndAvailableListings;

  // if the user has wishlist entries, retrieve details and relevant listings:
  if (wishesNotNull.filter((wish) => wish.user_id === userId)) {
    userWishes = wishesNotNull.filter((wish) => wish.user_id === userId);
    userWishCategories = userWishes.map((wish) => wish.category_id);
    relevantListings = props.listings
      .filter(
        (listing) =>
          listing.owner_id !== userId &&
          listing.category_id === props.findMostRepresented(userWishCategories)[0]
      )
      .slice(0, 5);

    // filter out listings that have already been accepted in trades:
    const acceptedProposals = props.proposals.filter(
      (proposal) => proposal.is_accepted === true
    );
    const unavailableListingIds = acceptedProposals.map(
      (proposal) => proposal.listing_id
    );
    const unavailableAssetIds = acceptedProposals.map(
      (proposal) => proposal.asset_id
    );
    unavailableListingIds.push(...unavailableAssetIds);
    relevantAndAvailableListings = relevantListings.filter(
      (listing) => !unavailableListingIds.includes(listing.id)
    );
  }

  const [wishName, setWishName] = useState("");
  function handleChange(event) {
    setWishName(event.target.value);
  };

  const [wishCategory, setWishCategory] = useState(null);
  
  function categorySelect(event) {
    setWishCategory(event.target.value);
  };

  function addWish(event) {
    event.preventDefault();
    const newWish = {
      id: props.wishes.length + 1,
      name: wishName,
      category_id: wishCategory,
      user_id: userId,
    };
    props.updateWishes(newWish);
  }

  function remove(card) {
    const wishToRemove = userWishes[card];
    props.removeWish(wishToRemove);
  }

  let cards;
  userWishes && (cards = Array.from(Array(userWishes.length).keys())); // an index counting the user's wishes from 0

  return (
    <>
      <CssBaseline />
      <div className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <Typography variant="h5" align="left" color="textPrimary">
            Add an entry to your wishlist
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
              style={{ height: "18px" }}
              select
              onChange={categorySelect}
            >
              {props.categories.map((option) => (
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
              className={classes.heroContent}
            >
              <Grid item xs={9} style={{ marginBottom: "0px" }}>
                <TextField
                  size="small"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="outlined-basic"
                  label="Item name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <BootstrapButton2
                  style={{ marginTop: "8px" }}
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
            My Wishlist
          </Typography>

          {userWishes && (
            <Grid
              container
              alignItems="center"
              spacing={0}
              direction="row"
              // justify="center"
            >
              {cards.map((card) => (
                <>
                  <Grid item xs={9}>
                    <Typography variant="h7" component="h3">
                      {userWishes[card].name}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <IconButton color="secondary">
                      <CloseIcon onClick={() => remove(card)} />
                    </IconButton>
                  </Grid>
                </>
              ))}
            </Grid>
          )}

          {relevantAndAvailableListings.length > 0 && (
            <>
              <Typography
                variant="h5"
                align="left"
                color="textPrimary"
                paragraph
              >
                Explore related listings
              </Typography>
              <Carousel>
                {relevantAndAvailableListings.map((listing) => (
                  <div>
                    <h3
                      onClick={() => history.push(`/listings/${listing.id}`)}
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
          )}
        </Container>
      </div>
    </>
  );
}
