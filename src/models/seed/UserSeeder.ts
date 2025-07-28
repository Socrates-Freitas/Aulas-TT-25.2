import { Prisma, PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker";

export async function userSeeder(prisma: PrismaClient, numUser: number) {
	let users: Prisma.UserCreateInput[] = [];

	for (let i = 0; i < numUser; i++) {
		users.push({
			userName: fakerPT_BR.internet.username(),
			fullName: fakerPT_BR.person.fullName(),
			email: fakerPT_BR.internet.email(),
			isPremium: i % 2 == 0 ? true : false,
		});
	}

	await prisma.user.createMany({
		data: users,
	});
}

