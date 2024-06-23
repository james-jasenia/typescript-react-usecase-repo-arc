import React from "react";
import './ProductCard.css';

type ProductCardProps = {
    name: String;
};

const ProductCard: React.FC<ProductCardProps>  = ({ name }) => {
 return(
    <div>
        <h1 className="Name">{name}</h1>
    </div>
 )
};

export default ProductCard;