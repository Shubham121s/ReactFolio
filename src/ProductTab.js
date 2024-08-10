
import Product from "./Product.js";

function ProductTab (){
  // let Options=["hi-tech","Durable","fast"];
  
  // let Options2={a:"hi-tech", b:"durable", c:"fast"};
    return (
        <div className="App">
          
          <Product title="phone" price={30000}  /> 
          <Product title="laptop" price={40000}/>
          <Product title="pen" price={10}/>
          
          
          
        </div>
      );
}

export default ProductTab;