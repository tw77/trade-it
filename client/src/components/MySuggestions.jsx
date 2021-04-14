import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function MySuggestions() {
  // const {userId} = useParams(); <--- would this be replaced by useState or no?

  const [state, setState] = useState({
    listingsIndex: [],
    wishesFromUser: {},
    proposalsByUser: {},
  }); 
  // do we need this here or in some sort of useApplicationData.js file?

  useEffect(() => {
    Promise.all([
      axios.get(`listings/`),
      axios.get(`users/${userId}/wishes`),
      axios.get(`users/${userId}/proposals`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        listingsIndex: all[0].data,
        wishesFromUser: all[1].data,
        proposalsByUser: all[2].data,
      }));
    });
  }, []);

  // "Propose a trade!" button links to {ProposeTrade}
  // "Dismiss" removes suggestion from view (all client-side)

    
  return (
    <div>
      <h2>My Suggestions</h2>
    </div>
  )
}