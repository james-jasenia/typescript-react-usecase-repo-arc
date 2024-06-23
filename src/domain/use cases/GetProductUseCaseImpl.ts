import GetProductUseCase from "./GetProductUseCase";
import Product from "./Product";

class GetProductUseCaseImpl implements GetProductUseCase {
    execute(): Product[] {
        const product1: Product = {
            name: "Samsung S3"
        }

        const product2: Product = {
            name: "iPhone"
        }

        return [product1, product2]
    }
}

export default GetProductUseCaseImpl;