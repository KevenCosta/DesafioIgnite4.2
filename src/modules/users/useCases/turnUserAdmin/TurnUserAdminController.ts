import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.params.user_id
    const user = this.turnUserAdminUseCase.execute(id)
    return response.json(user)
  }
}

export { TurnUserAdminController };
