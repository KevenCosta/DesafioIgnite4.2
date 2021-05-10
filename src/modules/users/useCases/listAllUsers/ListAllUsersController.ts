import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers
    var erro = ""
    try{const all = this.listAllUsersUseCase.execute(user_id);
    return response.status(200).json(all)
        }catch(e){
            erro = e.message
                }
    return response.status(400).json({error:erro})
  }
}

export { ListAllUsersController };
