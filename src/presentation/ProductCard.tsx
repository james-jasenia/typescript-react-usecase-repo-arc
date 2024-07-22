import React, { useEffect, useState } from "react";
import './ProductCard.css';
import DependenciesResolver from "../di/DependenciesResolver";

const ProductCard: React.FC = () => {  
    
    const [productName, setProductName] = useState<string>('Loading...');

    useEffect(() => {
        const fetchProductName = async () => {
            const name = await DependenciesResolver.getProductUseCase.execute();
            setProductName(name); 
        };

        fetchProductName();
    }, []);

    return(
    <div>
        <h1 className="Name">Name: {productName}</h1>
    </div>
 )
};

export default ProductCard;