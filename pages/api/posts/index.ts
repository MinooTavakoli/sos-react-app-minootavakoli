import { posts } from "../../../todoData";
import { NextApiResponse, NextApiRequest } from "next/types";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(posts);
  const body = JSON.parse(req.body);

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
};

export default handler;
