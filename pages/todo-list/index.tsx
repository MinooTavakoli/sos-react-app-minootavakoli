import { useState, useEffect } from "react";
import * as React from "react";

function TodoList() {
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);
  const [dataItem, setdataItem] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      const resp = await fetch(`http://localhost:3000/posts`);
      const posts = await resp.json();
      setPostList(posts);
    };
    fetchPositions();
  }, []);

  const submitPost = async () => {
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
  };

  const deletePost = async (postId: number) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
    });
    const responseGet = await fetch("http://localhost:3000/posts");
    const dataGet = await responseGet.json();
    setPostList(dataGet);
  };

  return (
    <>
      <div>
        {"Title: "}
        <input
          type="text"
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        {"Desc: "}
        <input
          type="text"
          value={desc}
          onChange={(e: any) => {
            setDesc(e.target.value);
          }}
        />
        <button onClick={submitPost}>افزودن</button>
      </div>
      <br />

      {postList?.map((postItem: any) => {
        return (
          <div key={postItem.id}>
            {postItem.id}
            {"Title: "}
            {postItem.title}.<br />
            {postItem.desc}
            <hr />
            <button onClick={() => deletePost(postItem.id)}>حذف</button>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
