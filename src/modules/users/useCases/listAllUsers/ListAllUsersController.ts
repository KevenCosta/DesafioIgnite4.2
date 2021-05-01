import { Request, Response } from "express";

import { IRequest, ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.params.user_id
    var erro = ""
    try{const all = this.listAllUsersUseCase.execute(id);
    return response.json({all})
        }catch(e){
            erro = e.message
                }
    return response.status(400).json({error:erro})


  }
}

export { ListAllUsersController };
