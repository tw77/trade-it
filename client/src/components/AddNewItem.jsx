import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "50px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'grey',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddNewItem() {
  const classes = useStyles();
    
  // function publishItem(){
  //   // includes axios.post(`listings/`)
  // };

  // back naviagation with a "Cancel" button?

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Item
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="outlined-basic"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            required
            fullWidth
            multiline
            rows={4}
            label="Description"
            variant="outlined"
          />
          <TextField
            variant="outlined"
            id="select"
            label="Price Range *"
            type="city"
            fullWidth
            margin="normal"
            select>
            {/* logic here to map throug provinces data and define MenuItems */}
            {/* <MenuItem value="10">Ten</MenuItem> */}
            
          </TextField>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="picture"
            label="Picture"
            type="picture"
            id="picture"
            autoComplete="picture"
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add New Item
          </Button>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}