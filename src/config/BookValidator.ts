import z  from "zod";

const book = z.object({
  title: z
    .string("O title deve ser string")
    .trim()
    .min(5, "O title não deve ter menos de 5 caracteres")
    .max(55, "O title não deve ter mais que 55 caracteres"),
  author: z
    .string("O author deve ser string")
    .trim()
    .min(5, "O author não deve ter menos de 5 caracteres")
    .max(35, "O author não deve ter mais que 55 caracteres"),
  genre: z
    .string("O genre deve ser string")
    .trim()
    .min(5, "O genre não deve ter menos de 5 caracteres")
    .max(25, "O genre não deve ter mais que 55 caracteres"),
});

const createBook = book;

const updateBook = book.partial();

const bookParams = z.object({
  bookId: z.uuid("Formato de id inválido"),
});

export default {
  createBook,
  updateBook,
  bookParams,
};
