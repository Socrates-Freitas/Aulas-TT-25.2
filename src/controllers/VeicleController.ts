import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export class VeicleController {
	public static async createVeicle(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { placaVeiculo, modelo, ano, cor } = request.body;

			const createVeicleInput: Prisma.VeiculoCreateInput = {
				placaVeiculo: placaVeiculo,
				modelo: modelo,
				ano: ano,
				cor: cor,
				usuario: {
					connect: {
						id: userId,
					},
				},
			};

			const createdVeicle = await prisma.veiculo.create({
				data: createVeicleInput,
			});

			response.status(201).json(createdVeicle);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readVeicle(request: Request, response: Response) {
		try {
			const { placaVeicle } = request.params;

			const foundVeicle = await prisma.veiculo.findUnique({
				where: {
					placaVeiculo: placaVeicle,
				},
			});

			if (!foundVeicle) {
				response.status(404).json({ message: "Veículo não encontrado" });
				return;
			}

			response.status(200).json(foundVeicle);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async readAllVeicles(request: Request, response: Response) {
		try {
			const foundVeicles = await prisma.veiculo.findMany();

			response.status(200).json(foundVeicles);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async updateVeicle(request: Request, response: Response) {
		try {
			const { userId } = request.params;
			const { placaVeiculo, modelo, ano, cor } = request.body;

			const createVeicleInput: Prisma.VeiculoUpdateInput = {
				placaVeiculo: placaVeiculo,
				modelo: modelo,
				ano: ano,
				cor: cor,
			};

			const updatedVeicle = await prisma.veiculo.update({
				data: createVeicleInput,
				where: {
					placaVeiculo: placaVeiculo,
					idUsuario: userId,
				},
			});

			response.status(201).json(updatedVeicle);
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}

	public static async deleteVeicle(request: Request, response: Response) {
		try {
			const {userId,placaVeiculo} = request.body

			const deletedVeicle = await prisma.veiculo.delete({
				where:{
					placaVeiculo:placaVeiculo,
					idUsuario:userId
				}
			})

			response.status(200).json(deletedVeicle)
			
		} catch (error: any) {
			response.status(500).json({ message: error.message });
		}
	}
}
