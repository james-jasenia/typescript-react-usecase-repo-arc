import UserRepository from "../data/UserRepository";
import UserRepositoryImpl from "../data/UserRepositoryImpl";
import GetNameUseCase from "../domain/use cases/GetNameUseCase";
import GetNameUseCaseImpl from "../domain/use cases/GetNameUseCaseImpl";

class DependenciesResolver {

    private static userRepository: UserRepository = new UserRepositoryImpl();
    public static getNameUserCase: GetNameUseCase = new GetNameUseCaseImpl(this.userRepository);

}

export default DependenciesResolver;