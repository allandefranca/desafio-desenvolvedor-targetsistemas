import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Inserir estados
  const sp = await prisma.estado.create({
    data: {
      sigla: 'SP',
      nome: 'São Paulo',
    },
  });

  const rj = await prisma.estado.create({
    data: {
      sigla: 'RJ',
      nome: 'Rio de Janeiro',
    },
  });

  // Inserir tipos de telefone
  const celular = await prisma.tipoTelefone.create({
    data: { descricao: 'Celular' },
  });

  const comercial = await prisma.tipoTelefone.create({
    data: { descricao: 'Comercial' },
  });

  // Inserir clientes
  const cliente1 = await prisma.cliente.create({
    data: {
      nome: 'João da Silva',
      razaoSocial: 'João da Silva Ltda',
      estadoId: sp.id,
      telefones: {
        create: [
          { numero: '11987654321', tipoTelefoneId: celular.id },
          { numero: '1134567890', tipoTelefoneId: comercial.id },
        ],
      },
    },
  });

  const cliente2 = await prisma.cliente.create({
    data: {
      nome: 'Maria Oliveira',
      razaoSocial: 'Maria Oliveira S/A',
      estadoId: rj.id,
      telefones: {
        create: [
          { numero: '21987654321', tipoTelefoneId: celular.id },
        ],
      },
    },
  });

  console.log('Dados inseridos com sucesso!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
