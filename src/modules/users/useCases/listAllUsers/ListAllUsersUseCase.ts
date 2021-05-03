import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: any): User[] {//antes era irequest
    const userTestPermission = this.usersRepository.findById(user_id)
    if(userTestPermission.admin == false ||  !userTestPermission.id){
        throw new Error("User does not have permission!")
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
