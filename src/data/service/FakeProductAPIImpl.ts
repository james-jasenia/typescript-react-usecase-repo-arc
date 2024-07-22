import Product from '../../domain/model/Product';
import axiosInstance from '../remote/FakeStoreAPI';

  async function getFirstProduct(): Promise<Product | undefined> {
    console.log("Fetching First Product");
    try {
        const response = await axiosInstance.get('/products/1');
        const json = response.data;
        console.log(json);
        return map(json)
    } catch (error) {
        console.log(error);
        return undefined;
    }
    
    function map(data: any): Product {
        return { name: data.title };
    }
  }

export default getFirstProduct;
