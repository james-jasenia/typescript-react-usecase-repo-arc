import GetProductUseCase from "../domain/use cases/GetProductUseCase";

class HelloViewModel {

    private getProductUseCase: GetProductUseCase

    constructor(getProductUseCase: GetProductUseCase) {
        this.getProductUseCase = getProductUseCase
    }

    async getName(): Promise<string> {
        return await this.getProductUseCase.execute()
    }
}

export default HelloViewModel;

