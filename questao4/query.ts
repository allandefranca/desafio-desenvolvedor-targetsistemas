// SELECT c.id, c.razao_social, t.numero
// FROM Clientes c
// JOIN Telefones t ON c.id = t.cliente_id
// JOIN Estados e ON c.estado_id = e.id
// WHERE e.sigla = 'SP';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const clientesSP = await prisma.cliente.findMany({
    where: {
      estado: {
        sigla: 'SP',
      },
    },
    select: {
      id: true,
      razaoSocial: true,
      telefones: {
        select: {
          numero: true,
        },
      },
    },
  });

  console.log('Clientes de São Paulo:', clientesSP);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
