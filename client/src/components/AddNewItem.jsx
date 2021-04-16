import React, { useReducer, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

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

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      name: '',
      description: '',
      price_range: '',
      picture: ''
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
 }

 const mockListing = {
  "id": 1,
  "name": "Linen shirt, M",
  "description": "Rarely-worn light blue linen shirt, very comfortable",
  "picture": "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "owner_id": 3,
  "storer_id": 3,
  "category_id": 2
}

export default function AddNewItem(props) {
  // const history = useHistory();

  // console.log('listings in AddNewItem.jsx: ', listings);

  const classes = useStyles();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  console.log('props.listings in AddNewItem', props.listings);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.publishListing(formData);
    setSubmitting(true);
    console.log('new item: ', formData);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000);
  }


 // axios.post(`/api/listings`)



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
            onChange={handleChange}
            value={formData.name || ''}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            required
            fullWidth
            multiline
            rows={4}
            name="description"
            variant="outlined"
            onChange={handleChange}
            value={formData.description || ''}
          />
          <TextField
            variant="outlined"
            id="select"
            label="Category *"
            fullWidth
            margin="normal"
            name="category"
            select onChange={handleChange} >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} 
          </TextField>
          <TextField
            variant="outlined"
            id="select"
            label="Price Range *"
            fullWidth
            margin="normal"
            name="price range"
            select onChange={handleChange} >
            {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} 
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
            onChange={handleChange}
            value={formData.picture || ''}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.submit}
          >
            Add New Item
          </Button>
          {submitting &&
       <div>
         You are posting the following listing:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
        </form>
      </div>
    </Container>
  );
}