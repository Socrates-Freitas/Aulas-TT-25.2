import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export async function premiumOnly(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const prisma = new PrismaClient();
    const { userId } = request.body;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      response.status(404).json({ message: "usuário não encontrado" });
      return;
    }

    if (user.isPremium === false) {
      response.status(403).json({ message: "Você não é premium" });
      return;
    }

    next();
  } catch (error: any) {
    response.status(500).json({ message: error.message });
    return;
  }
}
