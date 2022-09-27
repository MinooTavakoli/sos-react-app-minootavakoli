import { articles } from "../../../ data";
import { NextApiResponse, NextApiRequest } from "next/types";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  
  res.status(200).json(articles);
};

export default handler;
