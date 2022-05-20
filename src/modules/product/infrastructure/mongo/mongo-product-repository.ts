import { ProductModel } from "./models/product";
import { ProductRepository } from "../../domain/product-repository";
import { Product } from "../../domain/product";

export class MongoProductRepository implements ProductRepository {

  async create(product: Product): Promise<void> {
    const prod = new ProductModel(product);

    await prod.save();
  }

  async get(): Promise<Product[]> {
    return await ProductModel.find(
      {},
      { __v: 0, _id: 0 }    
    ).exec();
  }

  async remove(id: string): Promise<void> {
    await ProductModel.findOneAndRemove({ id }).exec();
  }
}
