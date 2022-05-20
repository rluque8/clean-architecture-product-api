import { ProductRepositoryMock } from './mocks/product-repository-mock';
import { ProductCreateInteractor } from './../../../../../src/modules/product/application/interactors/product-create-interactor';
import { Product } from "../../../../../src/modules/product/domain/product";
import { ProductMother } from '../../domain/product-mother';

describe('ProductCreateInteractor', () => {
  it('creates a product', async () => {
    const product: Product = ProductMother.random();

    const repository = new ProductRepositoryMock();
    const interactor = new ProductCreateInteractor(repository);

    await interactor.execute(product);

    repository.assertSaveHasBeenCalledWith(product);
  });
});
