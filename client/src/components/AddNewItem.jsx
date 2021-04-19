import React, { useReducer, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  TextField,
  Container,
  MenuItem,
} from "@material-ui/core";

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
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
  },
})(Button);


const categories = [
  {
    value: 1,
    label: "Electronics",
  },
  {
    value: 2,
    label: "Clothing",
  },
  {
    value: 3,
    label: "Books",
  },
  {
    value: 4,
    label: "Furniture",
  },
  {
    value: 5,
    label: "Appliances",
  },
  {
    value: 6,
    label: "Cars",
  },
  {
    value: 7,
    label: "Bicycles",
  },
  {
    value: 8,
    label: "Carpets",
  },
  {
    value: 9,
    label: "Plants",
  },
  {
    value: 10,
    label: "Instruments",
  },
];
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    paddingTop: "50px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "grey",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const formReducer = (state, event) => {
  if (event.reset) {
    return {
      name: "",
      description: "",
      category: "",
      picture: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function AddNewItem(props) {
  // const history = useHistory();
  // console.log('listings in AddNewItem.jsx: ', listings);
  const classes = useStyles();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  console.log("props.listings in AddNewItem", props.listings);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.publishListing(formData);
    setSubmitting(true);
    console.log("new item: ", formData);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  // back naviagation with a "Cancel" button?
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h5" align="left" color="textPrimary">
          Add new item
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
            value={formData.name || ""}
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
            value={formData.description || ""}
          />
          <TextField
            variant="outlined"
            id="select"
            label="Category *"
            fullWidth
            margin="normal"
            name="category"
            select
            onChange={handleChange}
          >
            {categories.map((option) => (
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
            value={formData.picture || ""}
          />
          <Grid container spacing={0} direction="row" justify="flex-end">
            <Grid item xs={4}>
              <BootstrapButton2
                type="submit"
                style={{ marginTop: "8px" }}
                variant="contained"
                color="primary"
                disableRipple
                onClick={handleSubmit}
              >
                Add Item
              </BootstrapButton2>
            </Grid>
          </Grid>
          {submitting && (
            <div>
              You are posting the following listing:
              <ul>
                {Object.entries(formData).map(([name, value]) => (
                  <li key={name}>
                    <strong>{name}</strong>: {value.toString()}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </Container>
  );
}
