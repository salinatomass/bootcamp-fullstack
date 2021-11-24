import { useState, useEffect } from "react";
import { getAllNotes, createNote } from "../services/notes";

import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllNotes()
      .then((data) => {
        setLoading(false);
        setPosts(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const handleChange = (e) => setNewPost(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postToAddToState = {
      title: newPost,
      body: newPost,
      userId: 1,
    };

    createNote(postToAddToState)
      .then((newNote) => setPosts((prevPosts) => prevPosts.concat(newNote)))
      .catch((err) => console.log(err));

    setNewPost("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newPost} onChange={handleChange} />
        <button type="submit">Crear nota</button>
      </form>
      <p>{loading ? "Loading..." : ""}</p>
      <ol>
        {posts.map((note) => (
          <Post key={note.id} {...note} />
        ))}
      </ol>
    </div>
  );
};

export default Posts;
