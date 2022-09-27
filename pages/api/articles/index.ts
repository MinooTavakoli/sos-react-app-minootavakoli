import { articles } from "../../../ data";
import { NextApiResponse, NextApiRequest } from "next/types";

const handler = (req: NextApiRequest, res: NextApiResponse) => {  
  res.status(200).json(articles);
};

export default handler;
