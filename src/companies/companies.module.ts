import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [CompaniesResolver, CompaniesService, PrismaService],
})
export class CompaniesModule {}
