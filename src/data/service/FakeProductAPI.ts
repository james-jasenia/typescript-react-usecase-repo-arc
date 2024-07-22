import Product from "../../domain/model/Product";

interface FakeProductAPI {
    getFirstProduct(): Promise<Product | undefined>
}