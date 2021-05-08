import React from "react";

import "./Home.css";
import Header from "../../components/Header/Header";

import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/";
const publicKey = "579271c0b6b760fb4dd78b3297efea5c";
const privateKey = "84c7f3e400faee71994b1dd7b56a4117f098c8b8";
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const Home = () => {
  React.useEffect(() => {
    axios
      .get(`${baseURL}characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(hash);
  console.log(time);

  return (
    <div>
      <Header />
      <h1>MARVEL</h1>
    </div>
  );
};

export default Home;
