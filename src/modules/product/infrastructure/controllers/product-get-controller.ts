import { Response, Request } from "express";
import { HTTP_STATUS } from "../../../shared/domain/http-status";
import { BaseController } from "../../../shared/domain/base-controller";
import { productGetInteractor } from "../dependencies";

export class ProductGetController extends BaseController {
  async run(req: Request, res: Response): Promise<void> {
    try {
      const products = await productGetInteractor.execute();
      res.status(HTTP_STATUS.OK).json({ data: products });
    } catch (error) {
      if (error instanceof Error) {
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error: error.message });
      } else {
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error });
      }
    }
  }
}
