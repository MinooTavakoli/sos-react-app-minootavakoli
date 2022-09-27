import { articles } from "../../../ data";

import { NextApiResponse, NextApiRequest } from "next/types";

const handler = ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
  const filtered = articles.filter((article) => article.id === id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `article with id of ${id} was not found` });
  }
};

export default handler;
