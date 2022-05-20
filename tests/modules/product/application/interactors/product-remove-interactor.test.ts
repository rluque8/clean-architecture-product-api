import { ProductRemoveInteractor } from './../../../../../src/modules/product/application/interactors/product-remove-interactor';
import { ProductRepositoryMock } from './mocks/product-repository-mock';
import { Product } from "../../../../../src/modules/product/domain/product";
import { faker } from '@faker-js/faker';

describe('ProductRemoveInteractor', () => {
  it('removes a product given an id', async () => {
    const product: Product = {id: faker.random.word(), name: faker.random.word(), description: faker.random.words() };

    const repository = new ProductRepositoryMock();
    const interactor = new ProductRemoveInteractor(repository);

    await interactor.execute(product.id);

    repository.assertRemoveHasBeenCalledWith(product.id);
  });
});
