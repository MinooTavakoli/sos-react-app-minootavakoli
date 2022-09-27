import Link from "next/link";
import Image from "next/image";
import articleStyles from "../styles/Article.module.css";
import clock from "../public/clock.png";

const ArticleItem = ({ article }: any) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <Image
          src={article.image}
          alt="article_image"
          className={articleStyles.image}
        />
        <h3>{article.title}</h3>
        <div className={articleStyles.wrapper}>
          <Image src={clock} alt="clock_icon" />
          <span className={articleStyles.time}>{article.time}</span>
        </div>
        <p>{article.excerpt}</p>
        <div className={articleStyles.button}>ادامه</div>
      </a>
    </Link>
  );
};

export default ArticleItem;
