-- DropForeignKey
ALTER TABLE "Estacionamento" DROP CONSTRAINT "Estacionamento_placaVeiculo_fkey";

-- DropForeignKey
ALTER TABLE "Lavagem" DROP CONSTRAINT "Lavagem_placaVeiculo_fkey";

-- DropForeignKey
ALTER TABLE "Veiculo" DROP CONSTRAINT "Veiculo_idUsuario_fkey";

-- AddForeignKey
ALTER TABLE "Veiculo" ADD CONSTRAINT "Veiculo_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lavagem" ADD CONSTRAINT "Lavagem_placaVeiculo_fkey" FOREIGN KEY ("placaVeiculo") REFERENCES "Veiculo"("placaVeiculo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estacionamento" ADD CONSTRAINT "Estacionamento_placaVeiculo_fkey" FOREIGN KEY ("placaVeiculo") REFERENCES "Veiculo"("placaVeiculo") ON DELETE CASCADE ON UPDATE CASCADE;
