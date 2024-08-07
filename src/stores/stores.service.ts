import { Injectable } from '@nestjs/common';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoresService {
  constructor(private readonly prisma: PrismaService) {}
  create(createStoreInput: CreateStoreInput) {
    return this.prisma.store.create({
      data: {
        companyId: createStoreInput.companyId,
      },
    });
  }

  findAll() {
    return this.prisma.store.findMany();
  }

  findOne(id: number) {
    return this.prisma.store.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateStoreInput: UpdateStoreInput) {
    return this.prisma.store.update({
      where: {
        id,
      },
      data: {
        companyId: updateStoreInput.companyId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.store.delete({
      where: {
        id,
      },
    });
  }
}
