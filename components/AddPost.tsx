// import React, { useState } from "react";
// import { IPost } from "../types";

// type Props = {
//   savePost: (e: React.FormEvent, formData: IPost) => void;
// };

// const AddPost: React.FC<Props> = ({ savePost }) => {
//   const [formData, setFormData] = React.useState<IPost>();

//   const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
//     setFormData({
//       ...formData,
//       [e.currentTarget.id]: e.currentTarget.value,
//     });
//   };

//   // function addReq() {
//   //   const axios = require("axios");

//   //   axios
//   //     .post("http://localhost:3000/posts", {
//   //       userId: 112,
//   //       id: 223,
//   //       title:
//   //         "test post title",
//   //       body: "desc test post",
//   //     })
//   //     .then((resp) => {
//   //       console.log(resp.data);
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });
//   // }

//   // async function addReq(
//   //   url = "http://localhost:3000/posts",
//   //   data =""
//   // ) {
//   //   const response = await fetch(url, {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(data),
//   //   });
//   //   return response.json();
//   // }

//   // function addReq() {
//   //   const data = {
//   //     userId: 222,
//   //     id: 3333,
//   //     title: "test post title",
//   //     body: "desc test post",
//   //   };

//   //   fetch("http://localhost:3000/posts", {
//   //     method: "POST", // or 'PUT'
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(data),
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       console.log("Success:", data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error:", error);
//   //     });
//   // }

//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");

//   const jsonServer = require("json-server");
//   const server = jsonServer.create();
//   const router = jsonServer.router("db.json");
//   const request = require("request");
//   const middlewares = jsonServer.defaults();

//   server.use(middlewares);
// server.use(jsonServer.bodyParser);

//   const addReq = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:3000/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         userId: Math.random().toString(36).slice(2),
//         id: Math.random().toString(36).slice(2),
//         title: title,
//         body: desc,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // this.setState({ posts: [data, ...this.state.posts] });
//         // this.setState({ title: '' });
//         // this.setState({ body: '' });
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   return (
//     <form className="Form" onSubmit={(e) => savePost(e, formData)}>
//       <div>
//         <div className="Form--field">
//           <label htmlFor="name">Title</label>
//           <input
//             onChange={(e) => {
//               setTitle(e.target.value);
//             }}
//             type="text"
//             id="title"
//           />
//         </div>
//         <div className="Form--field">
//           <label htmlFor="body">Description</label>
//           <input
//             onChange={(e) => {
//               setDesc(e.target.value);
//             }}
//             type="text"
//             id="body"
//           />
//         </div>
//       </div>
//       <button className="Form__button" disabled={!title} onClick={addReq}>
//         Add Post
//       </button>
//     </form>
//   );
// };

// export default AddPost;

import { useState } from "react";

function BooksPage() {
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
    console.log(data);
  };
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

      <div>
        <button onClick={fetchBooks}>Get the latest books</button>
      </div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            {book.id}.<br />
            {"Title: "}
            {book.title}.<br />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default BooksPage;
