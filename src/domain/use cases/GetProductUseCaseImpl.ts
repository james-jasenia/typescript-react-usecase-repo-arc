import ProductRepository from "../../data/repositories/ProductRepository";
import GetProductUseCase from "./GetProductUseCase";
import Product from "../model/Product";

class GetProductUseCaseImpl implements GetProductUseCase {

    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository
    }

    async execute(): Promise<string> {
        return this.repository.getProductName();
    }
}

export default GetProductUseCaseImpl;