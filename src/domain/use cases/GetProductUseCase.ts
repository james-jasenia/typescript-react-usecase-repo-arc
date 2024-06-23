import Product from "./Product";

interface GetProductUseCase {
    execute(): Product[]
}

export default GetProductUseCase;