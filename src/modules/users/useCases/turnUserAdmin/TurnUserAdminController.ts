import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.params//Se declarar como objeto causa erro
    var erro = ""
    try{const user = this.turnUserAdminUseCase.execute(id)
    return response.json(user)
        }
    catch(e){
      erro = e.message
            }
      return response.status(404).json({error:erro})
  }
}

export { TurnUserAdminController };
