import { w } from "@faker-js/faker/dist/airline-CLphikKp";
import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class BookRentController {
  public static async createBookRent(request: Request, response: Response) {
    try {
      const { bookId, userId } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });

      if (!user || !book) {
        response.status(404).json({ message: "Usuário ou livro inexistentes" });
        return;
      }

      const bookRentCreateInput: Prisma.BookRentCreateInput = {
        book: {
          connect: {
            id: bookId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      };

      const createdBookRent = await prisma.bookRent.create({
        data: bookRentCreateInput,
      });

      response.status(201).json(createdBookRent);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async readBookRent(request: Request, response: Response) {
    try {
      const { bookId, userId } = request.body;

      const foundBookRent = await prisma.bookRent.findUnique({
        where: {
          userId_bookId: {
            userId: userId,
            bookId: bookId,
          },
        },
      });

      if (!foundBookRent) {
        response
          .status(404)
          .json({ message: "Informação de livro alugado inexistente" });
        return;
      }
      response.status(200).json(foundBookRent);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async readAllBookRents(request: Request, response: Response) {
    try {
      const foundBookRents = await prisma.bookRent.findMany();

      response.status(200).json(foundBookRents);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async updateBookRent(request: Request, response: Response) {
    try {
      const { bookId, userId } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      const book = await prisma.book.findUnique({
        where: {
          id: bookId,
        },
      });

      if (!user || !book) {
        response.status(404).json({ message: "Usuário ou livro inexistentes" });
        return;
      }

      const bookRentCreateInput: Prisma.BookRentUpdateInput = {
        book: {
          connect: {
            id: bookId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      };

      const updatedBookRent = await prisma.bookRent.update({
        data: bookRentCreateInput,
        where: {
          userId_bookId: {
            userId: userId,
            bookId: bookId,
          },
        },
      });

      response.status(200).json(updatedBookRent);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }

  public static async deleteBookRent(request: Request, response: Response) {
    try {
      const { bookId, userId } = request.body;

      const deletedBookRent = await prisma.bookRent.delete({
        where: {
          userId_bookId: {
            bookId: bookId,
            userId: userId,
          },
        },
      });

      response.status(200).json(deletedBookRent);
    } catch (error: any) {
      response.status(500).json({ message: error.message });
    }
  }
}
