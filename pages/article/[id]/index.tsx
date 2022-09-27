import { GetStaticPropsContext } from "next/types/index";
import Link from "next/link";
import Image from "next/image";
import { server } from "../../../config";
import clock from "../../../public/clock.png";
import articleStyles from "../../../styles/Article.module.css";

const article = ({ article }: any) => {
  return (
    <>
      <Link href="/">
        <div className={articleStyles.backButton}>بازگشت</div>
      </Link>
      <div className={articleStyles.cardItem}>
        <div className={articleStyles.imageItemWrapper}>
          <Image
            src={article.image}
            alt="article-item-image"
            className={articleStyles.imageItem}
          />
        </div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <div className={articleStyles.timeWrapper}>
          <Image src={clock} alt="clock_icon" />
          <span className={articleStyles.timeItem}>{article.time}</span>
        </div>
      </div>
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
