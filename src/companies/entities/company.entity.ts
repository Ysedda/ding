import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Store } from 'src/stores/entities/store.entity';

@ObjectType()
export class Company {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => [Store])
  stores: Store[];
}
