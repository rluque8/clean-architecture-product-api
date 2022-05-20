import { productCreateInteractor } from './../../application/interactors/dependencies';
import { Response, Request } from "express";
import { Product } from "../../domain/product";
import { HTTP_STATUS } from "../../../shared/domain/http-status";

export class ProductCreateController {

  async run(req: Request, res: Response): Promise<void> {
    try {
      const { body: product }: { body: Product } = req;
      await productCreateInteractor.execute(
        product
      );
      res.status(HTTP_STATUS.CREATE).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({error: error.message});
      }
    }
  }
}