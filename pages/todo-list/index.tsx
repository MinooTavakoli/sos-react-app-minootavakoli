import { useState, useEffect } from "react";
import { InferGetStaticPropsType } from "next";
import * as React from "react";

function BooksPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postList, setPostList] = React.useState(posts);

  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);
  const [books, setBooks] = useState([]);
  const [dataItem, setdataItem] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
  };

  const submitBook = async () => {
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
        id: Math.random(),
        title,
        desc,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setdataItem(data);
    postList.push(data);

    fetchBooks();
  };

  const deleteBook = async (bookId) => {
    const response = await fetch(`http://localhost:3000/posts/${bookId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    setdataItem(data);

    // const book = posts.find((book) => book.id === parseInt(bookId));
    // const deletedbook = posts.find((book) => book.id === parseInt(bookId));
    // const index = postList.findIndex((book) => book.id === parseInt(bookId));
    // postList.splice(index, 1);
    // setdataItem(postList);
    // postList.push(dataItem);
    // postList.push(data)
    console.log("pp", postList);
    console.log("ddd", data);

    fetchBooks();
  };
  // const fetchBooks = async () => {
  //   const response = await fetch('/api/books')
  //   const data = await response.json()
  //   console.log(data)
  //   setBooks(data)
  // }

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

      {postList?.map((book) => {
        console.log("postList", postList);

        return (
          <div key={book.id}>
            {book.id}
            {"Title: "}
            {book.title}.<br />
            {book.desc}
            <hr />
            <button onClick={() => deleteBook(book.id)}>Delete</button>
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
