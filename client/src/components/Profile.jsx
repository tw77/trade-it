import React from 'react';
import { useParams } from 'react-router-dom'
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
  const { userId } = useParams()

  // console.log('userId', userId);

  // let displayedUser;
  // if (userId) {
  //   (displayedUser = props.users.find((user) => user.id === Number(userId)))
  // } else {
  //   displayedUser = props.users.find((user) => user.id === 2);
  // }
    
  
  
  const displayedUser = props.users.find((user) => user.id === Number(userId));

  const mergedReviews = [].concat.apply([], props.reviews);
  const displayedReviews = mergedReviews.filter((review) => review.user_id === Number(userId));

  const displayedListings = props.listings.filter((listing) => listing.user.id === Number(userId));

  console.log('displayedUser', displayedUser);
  console.log('displayedReviews', JSON.stringify(displayedReviews));
  console.log('displayedListings', JSON.stringify(displayedListings));


  // if the userId matches the current user, render "editable" Profile.


  
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
            {displayedUser.first_name} {displayedUser.last_name}
            <p>{displayedUser.bio}</p>
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