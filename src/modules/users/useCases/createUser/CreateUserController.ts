import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    var erro = ""
    const {name, email} = request.body;
    try{const user = this.createUserUseCase.execute({name, email});
    return response.status(201).json(user);//For. de envio OK
        }
    catch(e){
      erro = e.message
    }
    return response.status(400).json({error:erro})
    
  }
}

export { CreateUserController };
