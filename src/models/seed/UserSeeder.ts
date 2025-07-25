import { Prisma, PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker";

export async function userSeeder(prisma: PrismaClient, numUsers: number) {
  const usuarios: Prisma.UsuarioCreateInput[] = [];

  for (let index = 0; index < numUsers; index++) {
    usuarios.push({
      nomeCompleto: fakerPT_BR.person.fullName(),
      numeroTelefone: fakerPT_BR.phone.number(),
      genero: fakerPT_BR.person.gender(),
      email: fakerPT_BR.internet.email(),
    });
  }

  await prisma.usuario.createMany({
    data: usuarios,
  });
}
