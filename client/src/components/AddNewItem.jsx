import React, { useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
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
      "Roboto",
      "sans-serif"
    ].join(","),
  },
})(Button);

const CustomTypography = withStyles({
  root: {
    color: "#6e5d34",
  },
})(Typography);

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
    label: "Accessories",
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
    label: "Sports",
  },
  {
    value: 7,
    label: "Bicycles",
  },
  {
    value: 8,
    label: "Books",
  },
  {
    value: 9,
    label: "Plants",
  },
  {
    value: 10,
    label: "Instruments",
  },
  {
    value: 11,
    label: "Services",
  },
  {
    value: 12,
    label: "Cameras",
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
    width: "100%",
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
  const history = useHistory();
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
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
      history.push("/");
    }, 4000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {submitting ? (
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={12}>
            <CustomTypography
              variant="h6"
              align="justify"
              style={{
                backgroundColor: "#e9c46a",
                border: "2.5px solid #4958b6",
                padding: "26px",
                borderRadius: "10px",
                marginTop: "75%",
              }}
            >
              Your listing is now up for trade.{" "}
              <strong>
                Thanks for helping to create a more sustainable future.
              </strong>
            </CustomTypography>
          </Grid>
        </Grid>
      ) : (
        <div className={classes.paper}>
          <Typography variant="h5" align="left" color="textPrimary">
            Add new listing
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="outlined-basic"
              label="Title"
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
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
              fullWidth
              name="picture"
              label="Picture"
              type="picture"
              id="picture"
              onChange={handleChange}
              value={formData.picture || ""}
            />
            <Grid container spacing={0} direction="row" justify="flex-end">
              <Grid item xs={3}>
                <BootstrapButton2
                  type="submit"
                  style={{ marginTop: "8px", marginLeft: "11px" }}
                  variant="contained"
                  color="primary"
                  disableRipple
                  onClick={handleSubmit}
                >
                  Publish
                </BootstrapButton2>
              </Grid>
            </Grid>
          </form>
        </div>
      )}
    </Container>
  );
}
