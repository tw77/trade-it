import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  whishlistContainer: {
    paddingTop: "50px",
    paddingLeft: "3px",
    paddingRight: "3px",
  }
});

export default function MyWishlist(props) {
  const classes = useStyles();
  
  console.log('props.wishes', props.wishes);

  // const {userId} = useParams();

  // useEffect(() => {
  //   axios.get(`users/${userId}/wishes`)
  // }, [userId]);
  // /* do we need a get request to all listings here too, or can that data just be passed in?
  // (for the "Explore related listings" carousel on the bottom) */

  // function addWish(){};

  // function removeWish(){};
    
  return (
    <>
      <h2
        className={classes.whishlistContainer}
      >My Wishlist</h2>
    </>
  )
}