import React from "react";
import './Breadcrums.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'
function Breadcrums(props)
{   const {product}=props;
    return(
    <div className="breadcrum">
    HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/>{product.name}
    </div>)
}
export default Breadcrums