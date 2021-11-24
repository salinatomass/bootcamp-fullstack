import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllNotes = () =>
  axios
    .get(API_URL)
    .then((response) => response.data)
    .catch((err) => err);

export const createNote = ({ title, body, userId }) =>
  axios
    .post(API_URL, { title, body, userId })
    .then((response) => response.data)
    .catch((err) => err);
