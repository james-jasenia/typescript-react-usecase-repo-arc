interface ProductRepository {
    getProductName(): Promise<string>
}

export default ProductRepository;