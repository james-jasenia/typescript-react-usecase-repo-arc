import ProductRepository from "./ProductRepository";
import getFirstProduct from "../service/FakeProductAPIImpl";

class ProductRepositoryImpl implements ProductRepository {

    async getProductName(): Promise<string> {
        try {
            const product = await getFirstProduct();
            return product ? product.name : "Missing Product Name";
        } catch (error) {
            console.error('Error fetching product:', error);
            return "Missing Product Name";
        }
    }
}

export default ProductRepositoryImpl;