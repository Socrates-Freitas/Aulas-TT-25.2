import { w } from "@faker-js/faker/dist/airline-CLphikKp";
import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
export class BookController {
  public static async createBook(request: Request, response: Response) {
    try {
      const { title, author, genre } = request.body;

      const createBookInput: Prisma.BookCreateInput = {
        title: title,
        author: author,
        genre: genre,
      };

      const createdBook = await prisma.book.create({
        data: createBookInput,
      });

      response.status(201).json(createdBook);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async readBook(request: Request, response: Response) {
    try {
      const { bookId } = request.params;

      const foundBook = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });

      if (!foundBook) {
        response.status(404).json({ message: "Livro não encontrado" });
        return;
      }

      response.status(200).json(foundBook);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async readAllBooks(request: Request, response: Response) {
    try {
      const foundBooks = await prisma.book.findMany();

      response.status(200).json(foundBooks);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async updateBook(request: Request, response: Response) {
    try {
      const { bookId } = request.params;
      const { title, author, genre } = request.body;

      const updateBookInput: Prisma.BookUpdateInput = {
        title: title,
        author: author,
        genre: genre,
      };

      const createdBook = await prisma.book.update({
        data: updateBookInput,
        where: {
          id: String(bookId),
        },
      });

      response.status(200).json(createdBook);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async deleteBook(request: Request, response: Response) {
    try {
      const { bookId } = request.params;

      const deletedBook = await prisma.book.delete({
        where: {
          id: bookId,
        },
      });

      response.status(200).json(deletedBook);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }
}
