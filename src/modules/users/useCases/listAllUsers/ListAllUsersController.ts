import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers
    var erro = ""
    try{const all = this.listAllUsersUseCase.execute(user_id);
    console.log(all)
    response.json({all})
        }catch(e){
            erro = e.message
                }
    console.log(erro)
    return response.status(400).json({error:erro})
  }
}

export { ListAllUsersController };
