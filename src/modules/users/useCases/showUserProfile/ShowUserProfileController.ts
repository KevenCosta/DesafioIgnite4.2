import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.params.user_id
    var erro = ""
    try{
      const user = this.showUserProfileUseCase.execute(id)
    return response.json({user})
        }
        catch(e){
          erro = e.message
                }
          return response.status(404).json({error:erro})
  }
}

export { ShowUserProfileController };
