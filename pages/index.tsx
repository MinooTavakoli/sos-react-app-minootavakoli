import Head from "next/head";
import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }: any) {
  return (
    <div>
      <Head>
        <title>My Next.js website</title>
        <meta name="description" content="a demo for roxo.ir/blog" />
        <meta name="keywords" content="web development, programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
