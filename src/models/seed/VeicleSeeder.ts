import { Prisma, PrismaClient } from "@prisma/client";
import { fakerPT_BR } from "@faker-js/faker"

export async function veicleSeeder(prisma: PrismaClient) {
  const users = await prisma.usuario.findMany({
    select: {
      id: true,
    },
  });

  const veicles: Prisma.VeiculoCreateManyInput[] = [];

  for (let index = 0; index < users.length; index++) {
    veicles.push({
      placaVeiculo: fakerPT_BR.vehicle.vrm(),
      modelo: fakerPT_BR.vehicle.model(),
      ano: fakerPT_BR.number.int({ min: 2010, max: 2025 }),
      cor: fakerPT_BR.color.human(),
      idUsuario: users[index].id,
    });
  }

  await prisma.veiculo.createMany({
    data: veicles,
  });
}
