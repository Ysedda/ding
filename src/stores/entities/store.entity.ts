import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Company } from 'src/companies/entities/company.entity';
import { Product } from 'src/products/entities/product.entity';

@ObjectType()
export class Store {
  @Field(() => Int)
  id: number;

  @Field(() => [Product])
  products: Product[];

  @Field(() => Int)
  companyId: number;

  @Field(() => Company)
  company: Company;
}
