import "./Product.css";


function Product({title,price,}) {
    let color={backgroundColour: price>30000 ? "pink": ""};
    //  console.log(features);
//    let isDiscount = price >30000 ? "Discount of 5%" : "";
    
    return(
        <div className="box " >
            <h3 style ={color}>{title}</h3>
            <h5>Price: {price}</h5>
            {/* {price >30000 ? <p>"Discount of 5%"</p> : null} */}
            {price >30000 && <p>Discount of 5%</p> }
            
           
        </div>

    );
}


export default Product;