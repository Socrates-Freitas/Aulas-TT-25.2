import { PrismaClient } from "@prisma/client";
import { userSeeder } from "./UserSeeder";
import { veicleSeeder } from "./VeicleSeeder";

const prisma = new PrismaClient();

async function main() {
	prisma.$connect();

	await userSeeder(prisma, 40);
	await veicleSeeder(prisma)
}

main()
	.then(async () => {
		prisma.$disconnect();
	})
	.catch(async (e: any) => {
		console.log(e);
		prisma.$disconnect();
	});
