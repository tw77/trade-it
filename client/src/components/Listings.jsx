import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, AppBar, Toolbar, CircularProgress, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import useApplicationData from "../hooks/useApplicationData";
import fakeListingsData from '../mockData/fakeListingsData'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
    paddingTop: "100px",
  },
  progress: {
    paddingTop: "150px",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
  const { history } = props;
  const [filter, setFilter] = useState()
  // const [ listingsData, setListingsData] = useState([fakeListingsData]);

  const { state } = useApplicationData();

  console.log('state', state.listings);
  
  // getListingCard(obj)

  // let i = 0; i++
  // listingsData[i].id

  function getListingCard(listingsId, name, picture) {
    // console.log(listingsData[`${listingsId}`])
    // const {id, name} = listingsData[`${listingsId}`]
  
    return (
      
      
        <Grid item xs={6} sm={6} md={4} key={listingsId}>
          <Card className={classes.card} onClick={() => history.push(`/listings/${listingsId}`)}>
            {/* onClick={() => history.push(`/${listingsId}`)} */}
            <CardMedia
                    className={classes.cardMedia}
                    image={picture}
                    title={name}
                  />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2">
                {name}</Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions> */}
          </Card>
          </Grid>
         
          
    )
  }

  return (
   
  <React.Fragment>
    <CssBaseline />
    <div className={classes.heroContent}>
      <AppBar position="static" color='white' >
        <Toolbar>
          <div>
            <SearchIcon />
              <TextField
                label='search'
                variant='standard'
              />
          </div>
        </Toolbar>
      </AppBar>
      {state.listings ? (
        
        <Container className={classes.cardGrid} maxWidth="md">
          
      <Grid container spacing={4}>
          {state.listings.map(item => getListingCard(item.id, item.name, item.picture))}
          

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
