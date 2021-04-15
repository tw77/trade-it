import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  addNewItemContainer: {
    paddingTop: "60px",
    paddingLeft: "3px",
    paddingRight: "3px",
  }
});

export default function AddNewItem() {
  const classes = useStyles();
    
  // function publishItem(){
  //   // includes axios.post(`listings/`)
  // };

  // back naviagation with a "Cancel" button?

  return (
    <div>
      <h2
      className={classes.addNewItemContainer}
      >Add New Item</h2>
    </div>
  )
}