import { fakerPT_BR } from "@faker-js/faker"
import { Prisma, PrismaClient } from "@prisma/client";

export async function bookSeeder(prisma: PrismaClient, numBooks: number) {
	const books: Prisma.BookCreateManyInput[] = [];

	for (let i = 0; i < numBooks; i++) {
		books.push({
			title: fakerPT_BR.book.title(),
			author: fakerPT_BR.book.author(),
			genre: fakerPT_BR.book.genre(),
			isPremiumOnly: i % 2 == 1 ? true : false,
		});
	}

	await prisma.book.createMany({
		data: books,
	});
}

