import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: any): User {//alterado IRequest
    console.log(user_id)
    const user = this.usersRepository.findById(user_id)
    
    if(user){
      const userAlterado = this.usersRepository.turnAdmin(user)
      return userAlterado;
    }
    throw new Error("User was not found!")
    
  }
}

export { TurnUserAdminUseCase };
