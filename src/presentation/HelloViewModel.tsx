import GetNameUseCase from "../domain/use cases/GetNameUseCase";

class HelloViewModel {

    private getNameUseCase: GetNameUseCase

    constructor(getNameUseCase: GetNameUseCase) {
        this.getNameUseCase = getNameUseCase
    }

    getName(): string {
        return this.getNameUseCase.execute();
    }
}

export default HelloViewModel;

