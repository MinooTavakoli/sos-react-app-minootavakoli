import { posts } from "../../../todoData.json";

export default function handler(req, res) {
  const { bookId } = req.query;
  if (req.method === "GET") {
    const book = posts.find((book) => book.id === parseInt(bookId));
    res.status(200).json(book);
  } else if (req.method === "DELETE") {
    const deletedbook = posts.find((book) => book.id === parseInt(bookId));
    const index = posts.findIndex((book) => book.id === parseInt(bookId));
    posts.splice(index, 1);
    res.status(200).json(deletedbook);
  }
}
