import { InputType, Int, Field } from '@nestjs/graphql';
import { Company } from 'src/companies/entities/company.entity';
import { Product } from 'src/products/entities/product.entity';

@InputType()
export class CreateStoreInput {
  @Field(() => [Product])
  products: Product[];

  @Field(() => Int)
  companyId: number;
}
