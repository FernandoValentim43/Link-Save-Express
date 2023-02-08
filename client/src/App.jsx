import React, { useState, useEffect } from "react";

import axios from "axios";


function App() {

  const [links, setlinks] = useState([]);


  //fetch the links from the api
  const getLinks = () => {
    axios.get("http://localhost:3000/links")
      .then((res) => {
        console.log("data fetched")
        setlinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //useEffect
  useEffect(() => {
    getLinks();
    console.log(links);
  }, []);


  return (
    
    <div className="links">
      {links.map((todo) => (

        <p>{todo.text}</p>

      ))}
    </div>

  );
}
export default App;