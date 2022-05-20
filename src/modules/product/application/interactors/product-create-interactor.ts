import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/product-repository";

export class ProductCreateInteractor {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(product: Product): Promise<void> {
    await this.productRepository.create(product);
  }
}