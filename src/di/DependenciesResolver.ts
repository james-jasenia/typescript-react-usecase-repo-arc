import UserRepository from "../data/UserRepository";
import UserRepositoryImpl from "../data/UserRepositoryImpl";
import GetNameUseCase from "../domain/use cases/GetNameUseCase";
import GetNameUseCaseImpl from "../domain/use cases/GetNameUseCaseImpl";
import GetProductUseCase from "../domain/use cases/GetProductUseCase";
import GetProductUseCaseImpl from "../domain/use cases/GetProductUseCaseImpl";

class DependenciesResolver {

    private static userRepository: UserRepository = new UserRepositoryImpl();
    public static getNameUserCase: GetNameUseCase = new GetNameUseCaseImpl(this.userRepository);
    public static getProductUseCase: GetProductUseCase = new GetProductUseCaseImpl();

}

export default DependenciesResolver;