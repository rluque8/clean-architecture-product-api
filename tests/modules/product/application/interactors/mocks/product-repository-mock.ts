import { Product } from "../../../../../../src/modules/product/domain/product";
import { ProductRepository } from "../../../../../../src/modules/product/domain/product-repository";

export class ProductRepositoryMock implements ProductRepository {
  private mockGet = jest.fn();
  private mockSave = jest.fn();
  private mockRemove = jest.fn();
  private products: Array<Product> = [];

  async create(product: Product): Promise<void> {
    this.mockSave(product);
  }

  async get(): Promise<Product[]> {
    this.mockGet();
    return this.products;
  }

  async remove(id: string): Promise<void> {
    this.mockRemove(id);
  }

  returnOnGet(products: Product[]) {
    this.products = products;
  }

  assertSaveHasBeenCalledWith(product: Product) {
    expect(this.mockSave).toHaveBeenCalledWith(product);
  }

  assertGetHasBeenCalled() {
    expect(this.mockGet).toBeCalled();
  }

  assertGetHasReturned(products: Product[]) {
    expect(this.get()).toBe(products);
  }

  assertRemoveHasBeenCalledWith(id: string) {
    expect(this.mockRemove).toHaveBeenCalledWith(id);
  }
}
