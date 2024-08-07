import { InputType, Int, Field } from '@nestjs/graphql';
import { Store } from 'src/stores/entities/store.entity';

@InputType()
export class CreateCompanyInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => [Store])
  stores: Store[];
}
