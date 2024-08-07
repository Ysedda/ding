import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCompanyInput: CreateCompanyInput) {
    return this.prisma.company.create({
      data: {
        id: createCompanyInput.id,
        name: createCompanyInput.name,
        stores: {
          create: createCompanyInput.stores,
        },
      },
    });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return this.prisma.company.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return this.prisma.company.update({
      where: {
        id,
      },
      data: {
        name: updateCompanyInput.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
