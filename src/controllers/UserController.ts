import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class UserController {
	public static async createUser(request: Request, response: Response) {
		try {
			const { nomeCompleto, email, genero, numeroTelefone } = request.body;

			const userCreateInput: Prisma.UsuarioCreateInput = {
				nomeCompleto: nomeCompleto,
				numeroTelefone: numeroTelefone,
				genero: genero,
				email: email,
			};

			const createdUser = await prisma.usuario.create({
				data: userCreateInput,
			});

			response.status(201).json(createdUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;

			const foundUser = await prisma.usuario.findUnique({
				where: {
					id: userId,
				},
			});

			if (!foundUser) {
				response.status(404).json({ message: "Usuário não encontrado" });
				return;
			}

			response.status(200).json(foundUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readAllUsers(request: Request, response: Response) {
		try {
			const foundUsers = await prisma.usuario.findMany();

			if (!foundUsers) {
				response.status(404).json({ message: "Usuário não encontrado" });
				return;
			}

			response.status(200).json(foundUsers);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async updateUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { nomeCompleto, email, genero, numeroTelefone } = request.body;

			const userUpdateInput: Prisma.UsuarioUpdateInput = {
				nomeCompleto: nomeCompleto,
				numeroTelefone: numeroTelefone,
				genero: genero,
				email: email,
			};

			const updatedUser = await prisma.usuario.update({
				data: userUpdateInput,
				where: {
					id: userId,
				},
			});

			response.status(200).json(updatedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async deleteUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;

			const deletedUser = await prisma.usuario.delete({
				where: {
					id: userId,
				},
			});

			response.status(200).json(deletedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}
}
