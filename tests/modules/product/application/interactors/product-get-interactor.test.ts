import { ProductGetInteractor } from "../../../../../src/modules/product/application/interactors/product-get-interactor";
import { ProductRepositoryMock } from "./mocks/product-repository-mock";

describe("ProductgetInteractor", () => {
  let repository: ProductRepositoryMock;

  beforeEach(() => {
    repository = new ProductRepositoryMock();
  });

  it("get list of products", async () => {
    const interactor = new ProductGetInteractor(repository);
    await interactor.execute();

    repository.assertGetHasBeenCalled();
  });
});
