import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }: any) => {
  return (
    <>
      <div className={articleStyles.gridTitle}>
        <h3>مقاله‌ها</h3>
        <h3 className={articleStyles.gridTitleDetail}>نمایش همه</h3>
      </div>
      <div className={articleStyles.grid}>
        {articles.map((article: any) => (
          <ArticleItem article={article} key={article.id} />
        ))}
      </div>
      <div className={articleStyles.moreButtonWrapper}>
        <div className={articleStyles.moreButton}>بیشتر</div>
      </div>
    </>
  );
};

export default ArticleList;
