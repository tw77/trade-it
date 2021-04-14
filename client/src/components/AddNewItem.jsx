import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function AddNewItem() {
  // do we need a get request to listings data on load? maybe not
  // useEffect(() => {
  //   axios.get(`listings/`)
  // }, []);
    
  function publishItem(){
    // includes axios.post(`listings/`)
  };

  // back naviagation with a "Cancel" button?

  return (
    <div>
      <h2>Add item</h2>
    </div>
  )
}