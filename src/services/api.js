import axios from "axios";
import md5 from "md5";

//EXCLUIR AO ENVIAR O ARQUIVO FINAL
// const publicKey = "579271c0b6b760fb4dd78b3297efea5c";
// const privateKey = "84c7f3e400faee71994b1dd7b56a4117f098c8b8";

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;