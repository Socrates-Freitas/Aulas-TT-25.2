import { Prisma, PrismaClient } from "../generated/prisma";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class UserController {
	public static async createUser(request: Request, response: Response) {
		try {
			const { fullName, userName, email } = request.body;

			const createInput: Prisma.UserCreateInput = {
				fullName: fullName,
				userName: userName,
				email: email,
			};

			const createdUser = await prisma.user.create({
				data: createInput,
			});

			response.status(201).json(createdUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;

			const foundUser = await prisma.user.findUnique({
				where: {
					id: userId,
				},
				include: {
					bookRent: {
						select: {
							book:true
						},
					},
				},
			});

			response.status(201).json(foundUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readAllUsers(request: Request, response: Response) {
		try {
			const users = await prisma.user.findMany({});

			response.status(200).json(users);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async updateUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { fullName, userName, email } = request.body;

			const createInput: Prisma.UserUpdateInput = {
				fullName: fullName,
				userName: userName,
				email: email,
			};

			const updatedUser = await prisma.user.update({
				data: createInput,
				where: {
					id: userId,
				},
			});

			response.status(200).json(updatedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async upsertUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { fullName, userName, email } = request.body;

			const createInput: Prisma.UserCreateInput = {
				fullName: fullName,
				userName: userName,
				email: email,
			};

			const updateInput: Prisma.UserUpdateInput = {
				fullName: fullName,
				userName: userName,
				email: email,
			};

			const upsertedUser = await prisma.user.upsert({
				create: createInput,
				update: updateInput,
				where: {
					id: userId,
				},
			});

			response.status(201).json(upsertedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async deleteUser(request: Request, response: Response) {
		try {
			const { userId } = request.params;

			const deletedUser = await prisma.user.delete({
				where: {
					id: userId,
				},
			});

			response.status(200).json(deletedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async deleteAllUsers(request: Request, response: Response) {
		try {
			const deletedUser = await prisma.user.deleteMany();
			response.status(200).json(deletedUser);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}
}






