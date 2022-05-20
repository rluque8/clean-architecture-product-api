import { Product } from "./product";

export interface ProductRepository {
  create(product: Product): Promise<void>;

  get(): Promise<Product[]>;

  remove(id: string): Promise<void>;
}
