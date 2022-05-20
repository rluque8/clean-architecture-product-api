import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/product-repository";

export class ProductGetInteractor {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.productRepository.get();
  }
}
