import z from "zod";

const bookRent = z.object({
  bookId: z.uuid(),
  userId: z.uuid(),
  price: z.number(),
});

const createBookRent = bookRent;

const readBookRent = bookRent.omit({
  price: true,
});

export default {
  createBookRent,
  readBookRent,
};
