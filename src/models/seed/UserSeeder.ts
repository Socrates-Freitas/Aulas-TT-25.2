import { Prisma, PrismaClient } from "../../generated/prisma";
import {fakerPT_BR} from "@faker-js/faker"

export async function userSeeder(prisma:PrismaClient, numUser:number){

	let users:Prisma.UserCreateInput[] = []

	for(let i = 0; i < numUser; i++){
		users.push({
			userName:fakerPT_BR.internet.username(),
			fullName:fakerPT_BR.person.fullName(),
			email:fakerPT_BR.internet.email()
		})
	}

	await prisma.user.createMany({
		data:users
	})
}
