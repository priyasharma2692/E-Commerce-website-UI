import React,{useContext} from "react";
import Breadcrums from "../Components/Breadcrums/Breadcrums.js";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.js";
import { ShopContext } from "../Context/ShopContext"
import './Product.css'
import {useParams} from 'react-router-dom';
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.js";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.js";
function Product()
{    const {all_product}=useContext(ShopContext);
     const {productId}=useParams();
     const product=all_product.find((e)=>e.id===Number(productId));
    return (<div>
        <Breadcrums product={product}/>
         <ProductDisplay product={product}/> 
         <DescriptionBox/>
         <RelatedProducts/>
    </div>)
}

export default Product