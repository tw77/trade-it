import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate>
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="last_name"
            label="Last Name"
            type="last_name"
            id="last_name"
            autoComplete="last_name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="province"
            label="Province"
            type="province"
            id="province"
            autoComplete="province"
          />
          <TextField
            variant="outlined"
            id="select"
            label="City / Town *"
            type="city"
            fullWidth
            margin="normal"
            select>
            {/* logic here to map throug provinces data and define MenuItems */}
            {/* <MenuItem value="10">Ten</MenuItem> */}
            
          </TextField>

          <TextField
            variant="outlined"
            id="select"
            label="Neighbourhood *"
            type="eighbourhood"
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

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="bio"
            label="Bio"
            type="bio"
            id="bio"
            autoComplete="bio"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          {/* <Grid container> */}
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}