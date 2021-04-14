import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    // I believe it needs to be an array 
    listings: [],
    // users: [],
    // assets: [],
    // proposals: [],
    // categories: [],
    // // we need route for that
    // provinces: [],
    // reviews: [],
    // wishes:


  });

  const setDay = (day) => setState({ ...state, day });

  //Gets data of days, appointments, interviewers from API and sets state for those
  useEffect(() => {
    Promise.all([
      axios.get(""),
      axios.get(""),
      axios.get(""),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        listings: all[0].data
      }));
    });
  }, []);


}

