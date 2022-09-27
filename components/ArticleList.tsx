import React from "react";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }: any) => {
  const [limit, setLimit] = React.useState(false);
  const articlesLimit = articles.filter((element: any) => element.id <= 4);

  return (
    <>
      <div className={articleStyles.gridTitle}>
        <h3>مقاله‌ها</h3>
        <h3
          className={articleStyles.gridTitleDetail}
          onClick={() => {
            setLimit(!limit);
          }}
        >
          {limit ? "بستن" : "نمایش همه"}
        </h3>
      </div>
      <div className={articleStyles.grid}>
        {limit
          ? articles.map((article: any) => (
              <ArticleItem article={article} key={article.id} />
            ))
          : articlesLimit.map((article: any) => (
              <ArticleItem article={article} key={article.id} />
            ))}
      </div>
      <div className={articleStyles.moreButtonWrapper}>
        <div
          className={articleStyles.moreButton}
          onClick={() => {
            setLimit(!limit);
          }}
        >
          {limit ? "بستن" : "بیشتر"}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
