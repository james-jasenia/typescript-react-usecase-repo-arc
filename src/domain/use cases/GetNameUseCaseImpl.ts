import UserRepository from "../../data/UserRepository";
import GetNameUseCase from "./GetNameUseCase";

class GetNameUseCaseImpl implements GetNameUseCase {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    execute(): string {
        return this.userRepository.getUserName()
    }
}

export default GetNameUseCaseImpl;