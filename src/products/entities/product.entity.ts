import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Store } from 'src/stores/entities/store.entity';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Float)
  price: number;
  
  @Field(() => Int)
  storeId: number;

  @Field(() => Store)
  store: Store;
}
