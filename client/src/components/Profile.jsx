import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
    paddingTop: "100px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Profile(props) {
  const classes = useStyles();
  // const {userId} = useParams(); <--- would this be replaced by useState or no?


  // const [state, setState] = useState({
  //   userDetailsAndListings: [],
  //   reviewsOfUser: {},
  // }); 

  // useEffect(() => {
  //   axios.get(`users/${userId}/profiles`)
  // }, [userId]);

  // useEffect(() => {
  //   Promise.all([
  //     axios.get(`users/${userId}/profiles`),
  //     axios.get(`users/${userId}/reviews`),
  //   ]).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       userDetailsAndListings: all[0].data,
  //       reviewsOfUser: all[1].data,
  //     }));
  //   });
  // }, []);

  // if the userId matches the current user, render "editable" Profile.

  // Edit button beside profile pic allows for modifying user details
  // Edit buttons by items in My Listings section link to specific {Listing}


  console.log('props.listingsByUser', props.listingsByUser);
  console.log('props.reviews', props.reviews);
    
  return (
    <React.Fragment>
    <CssBaseline />
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          {/* <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Album layout
          </Typography> */}
          <Typography variant="h5" align="left" color="textPrimary" paragraph>
            User name
            <p>Description</p>
          </Typography>
          <Typography variant="h5" align="left" color="textPrimary" paragraph>
            Listings by user
          </Typography>
          {/* <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div> */}
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={6} sm={6} md={4}>
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
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    {/* Footer */}
    <footer className={classes.footer}>
      <Typography variant="h6" align="left" gutterBottom>
        Reviews
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </footer>
    {/* End footer */}
  </React.Fragment>
  )
}