import { InputType, Int, Field } from '@nestjs/graphql';
import { Store } from 'src/stores/entities/store.entity';

@InputType()
export class CreateCompanyInput {
  @Field(() => String)
  name: string;
}
