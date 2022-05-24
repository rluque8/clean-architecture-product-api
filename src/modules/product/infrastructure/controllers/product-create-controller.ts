import Joi from "joi";
import { productCreateInteractor } from "../dependencies";
import { Response, Request } from "express";
import { Product } from "../../domain/product";
import { HTTP_STATUS } from "../../../shared/domain/http-status";
import { BaseController } from "../../../shared/domain/base-controller";

export class ProductCreateController extends BaseController {
  static schema() {
    return {
      body: Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string(),
      }),
    };
  }

  async run(req: Request, res: Response): Promise<void> {
    try {
      const { body: product }: { body: Product } = req;
      await productCreateInteractor.execute(product);
      res.status(HTTP_STATUS.CREATE).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error: error.message });
      } else {
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error });
      }
    }
  }
}
