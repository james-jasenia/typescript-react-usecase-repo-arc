import ProductRepository from "../data/repositories/ProductRepository";
import ProductRepositoryImpl from "../data/repositories/ProductRepositoryImpl";
import GetProductUseCase from "../domain/use cases/GetProductUseCase";
import GetProductUseCaseImpl from "../domain/use cases/GetProductUseCaseImpl";

class DependenciesResolver {

    private static productRepository: ProductRepository = new ProductRepositoryImpl();
    public static getProductUseCase: GetProductUseCase = new GetProductUseCaseImpl(DependenciesResolver.productRepository);

}

export default DependenciesResolver;