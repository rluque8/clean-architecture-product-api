import { faker } from "@faker-js/faker";
import { Product } from "./../../../../src/modules/product/domain/product";

export class ProductMother {
  static create(id: string, name: string, description: string): Product {
    return { id, name, description };
  }

  static random(): Product {
    return this.create(
      faker.random.word(),
      faker.random.word(),
      faker.random.words()
    );
  }
}
