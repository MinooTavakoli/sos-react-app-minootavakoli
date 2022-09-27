import { GetStaticPropsContext } from "next/types/index";
import { server } from "../../../config";
import Link from "next/link";

const article = ({ article }: any) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`${server}/api/articles/${context.params?.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article: any) => article.id);
  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,

    fallback: false,
  };
};

export default article;
