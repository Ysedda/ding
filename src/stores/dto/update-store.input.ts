import { Product } from 'src/products/entities/product.entity';
import { CreateStoreInput } from './create-store.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Company } from 'src/companies/entities/company.entity';

@InputType()
export class UpdateStoreInput extends PartialType(CreateStoreInput) {
  @Field(() => Int)
  companyId: number;
}
