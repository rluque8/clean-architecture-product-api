import { ProductRepository } from "../../domain/product-repository";

export class ProductRemoveInteractor {
  constructor(private readonly productRepository: ProductRepository) {
  }

  async execute(id: string): Promise<void> {
    await this.productRepository.remove(id);
  }
}
