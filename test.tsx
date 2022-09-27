import * as React from "react";
import { InferGetStaticPropsType } from "next";
import AddPost from "../../components/AddPost";
import Post from "../../components/Post";
import { IPost } from "../../types";
import { server } from "../../config";

// const API_URL: string = "https://jsonplaceholder.typicode.com/posts";
// console.log(API_URL);

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postList, setPostList] = React.useState(posts);

  const addPost = async (e: React.FormEvent, formData: IPost) => {
    e.preventDefault();
    const post: IPost = {
      id: Math.random(),
      title: formData.title,
      body: formData.body,
    };
    setPostList([post, ...postList]);
  };

  const deletePost = async (id: number) => {
    const posts: IPost[] = postList.filter((post: IPost) => post.id !== id);
    console.log(posts);
    setPostList(posts);
  };

  if (!postList) return <h1>Loading...</h1>;

  return (
    <main className="container">
      <h1>My posts</h1>
      <AddPost savePost={addPost} />
      {postList.map((post: IPost) => (
        <Post key={post.id} deletePost={deletePost} post={post} />
      ))}
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
