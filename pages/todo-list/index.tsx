import React, { useState, useEffect } from "react";
import todoStyles from "../../styles/Todo.module.css";

function TodoList() {
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState([]);
  const [dataItem, setdataItem] = useState([]);
  const [edit, setEdit] = useState(undefined);
  const [titleEdit, setTitleEdit] = useState("");

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
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setdataItem(data);
    postList.push(data);
    setTitle([]);
  };

  const deletePost = async (postId: number) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
    });
    const responseGet = await fetch("http://localhost:3000/posts");
    const dataGet = await responseGet.json();
    setPostList(dataGet);
  };

  const updatePost = async (postId: number) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: titleEdit,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setdataItem(data);
    setTitle([]);
    setEdit(undefined);
    const responseGet = await fetch("http://localhost:3000/posts");
    const dataGet = await responseGet.json();
    setPostList(dataGet);
  };

  return (
    <div className={todoStyles.todoComponent}>
      <div className={todoStyles.todoAddInputWrapper}>
        <input
          type="text"
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
          className={todoStyles.todoAddInput}
        />
        <button onClick={submitPost} className={todoStyles.buttonCustom}>
          Add
        </button>
      </div>
      <br />
      <div className={todoStyles.todoWrapper}>
        {postList?.map((postItem: any) => {
          return (
            <div key={postItem.id} className={todoStyles.todoWrapperItem}>
              {edit === postItem.id && edit ? (
                <>
                  <input
                    key={edit}
                    placeholder={postItem.title}
                    type="text"
                    onChange={(e) => {
                      setTitleEdit(e.target.value);
                    }}
                    className={todoStyles.todoAddInput}
                    style={{ width: "254px" }}
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
                        submitPost();
                      }
                    }}
                  />
                </>
              ) : (
                <div className={todoStyles.titlePost}>
                  <div>{postItem.title}</div>
                </div>
              )}
              <div className={todoStyles.buttonWrapper}>
                <button
                  style={{
                    width: "120px",
                    backgroundColor:
                      edit === postItem.id && edit ? "#76d870" : "#f9939d",
                  }}
                  className={todoStyles.buttonCustomTemplate}
                  onClick={() => {
                    edit ? updatePost(postItem.id) : deletePost(postItem.id);
                  }}
                >
                  {edit === postItem.id && edit ? "Save" : "Delete"}
                </button>
                {edit === postItem.id && edit ? (
                  <button
                    style={{ width: "120px", backgroundColor: "#c1c1c1" }}
                    className={todoStyles.buttonCustomTemplate}
                    onClick={() => {
                      setEdit(undefined);
                    }}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    style={{
                      width: "120px",
                      backgroundColor: "#bd93f9",
                    }}
                    className={todoStyles.buttonCustomTemplate}
                    onClick={() => {
                      setEdit(postItem.id);
                    }}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
