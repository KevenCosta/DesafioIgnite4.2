import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: any): User {//IRequest
    const user = this.usersRepository.findById(user_id)
    if(!user ){
      throw new Error("User was not found!")
    }
    return user
  }
}

export { ShowUserProfileUseCase };
