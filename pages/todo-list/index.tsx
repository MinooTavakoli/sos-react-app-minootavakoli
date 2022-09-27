import { useState, useEffect } from "react";
import { server } from "../../config";
import { InferGetStaticPropsType } from "next";
import * as React from "react";

function BooksPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postList, setPostList] = React.useState(posts);

  console.log("possss",postList);
  

  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    console.log(data);
    setBooks(data);
  };

  const submitBook = async () => {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setBooks(data);
    console.log(data);
  };

  console.log(books);

  useEffect(() => {

  }, [books]);

  return (
    <>
      <div>
        {"Title: "}
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        {"Desc: "}
        <input
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button onClick={submitBook}>Submit book</button>
      </div>
      <br />

      {postList.map((book) => {
        return (
          <div key={book.id}>
            {book.id}.<br />
            {"Title: "}
            {book.title}.<br />
            {book.desc}
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default BooksPage;

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
