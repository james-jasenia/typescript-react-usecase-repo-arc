import Product from "../model/Product";

interface GetProductUseCase {
    execute(): Promise<string>
}

export default GetProductUseCase;