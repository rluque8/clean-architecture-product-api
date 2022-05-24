import { Response, Request } from "express";
import Joi from "joi";
import { HTTP_STATUS } from './../../../shared/domain/http-status';
import { BaseController } from "../../../shared/domain/base-controller";
import { productRemoveInteractor } from "../dependencies";

export class ProductRemoveController extends BaseController {
  static schema() {
    return {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    };
  }
  async run(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await productRemoveInteractor.execute(id);
      res.status(HTTP_STATUS.OK).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error: error.message });
      } else {
        res.status(HTTP_STATUS.INTERNAL_ERROR).json({ error: error });
      }
    }
  }
}
