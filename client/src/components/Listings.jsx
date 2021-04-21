import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Card, AppBar, Toolbar, CircularProgress, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 8),
    paddingTop: "100px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: "100%", // 16:9
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },

}));


export default function Listings(props) {
  const classes = useStyles();
  const history = useHistory();
  const [filter, setFilter] = useState()
  
  const mergedProposals = [].concat.apply([], props.proposals);
  const acceptedProposals = mergedProposals.filter((proposal) => proposal.is_accepted === true);
  const unavailableListingIds = acceptedProposals.map((proposal) => proposal.listing_id);
  const unavailableAssetIds = acceptedProposals.map((proposal) => proposal.asset_id);
  unavailableListingIds.push(...unavailableAssetIds);
  const availableListings = props.listings.filter((listing) => !unavailableListingIds.includes(listing.id));


  const handleSearchChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  function getListingCard(listingsId, name, picture) {
  
    return (
      
      
        <Grid item xs={6} sm={6} md={4} key={listingsId}>
          <Card className={classes.card} onClick={() => history.push(`/listings/${listingsId}`)}>
            <CardMedia
                    className={classes.cardMedia}
                    image={picture}
                    title={name}
                  />
            {/* <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2">
                {name}</Typography>
            </CardContent> */}
          </Card>
          </Grid>
         
          
    )
  }



  return (
   
  <React.Fragment>
    <CssBaseline />
      <div className={classes.heroContent}>
      <Typography variant="h5" align="left" color="textPrimary">
          Explore listings
        </Typography>
      <AppBar position="static" align="left" style={{ background: 'transparent', boxShadow: 'none'}} > 
        <Toolbar>
          <div>
            <SearchIcon align="left" />
              <TextField
              onChange={handleSearchChange}
                label='Search'
                variant='standard'
              />
          </div>
        </Toolbar>
      </AppBar>
      {availableListings ? (
        
        <Container className={classes.cardGrid} maxWidth="md">
          
      <Grid container spacing={4}>
          {availableListings.map(item =>
            (
              (item.name.toLowerCase().includes(filter) && (item.category_id <= 12))
              || (!filter)
            )
            && getListingCard(item.id, item.name, item.picture))}
          

      </Grid>
      </Container>    
     
      ) : (
          <div className={classes.progress}>
          <CircularProgress/>
          </div>
        )}
        </div>
    </React.Fragment>
    
  )
}
