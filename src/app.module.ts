import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    CompaniesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    StoresModule,
    ProductsModule,
  ],
  providers: [AppService, PrismaService],
})
export class AppModule {}
