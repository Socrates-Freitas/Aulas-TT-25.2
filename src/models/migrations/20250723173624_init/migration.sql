/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "numeroTelefone" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Veiculo" (
    "placaVeiculo" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("placaVeiculo")
);

-- CreateTable
CREATE TABLE "Lavagem" (
    "id" TEXT NOT NULL,
    "tipoLavagem" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "placaVeiculo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Lavagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estacionamento" (
    "id" TEXT NOT NULL,
    "dataEntrada" TIMESTAMP(3) NOT NULL,
    "dataSaida" TIMESTAMP(3) NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "placaVeiculo" TEXT NOT NULL,

    CONSTRAINT "Estacionamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lavagem" ADD CONSTRAINT "Lavagem_placaVeiculo_fkey" FOREIGN KEY ("placaVeiculo") REFERENCES "Veiculo"("placaVeiculo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estacionamento" ADD CONSTRAINT "Estacionamento_placaVeiculo_fkey" FOREIGN KEY ("placaVeiculo") REFERENCES "Veiculo"("placaVeiculo") ON DELETE RESTRICT ON UPDATE CASCADE;
