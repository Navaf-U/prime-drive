import { useContext} from "react"
import { ProductsContext } from "../Context/ProductsProvider"
import { useParams } from "react-router-dom"

function ProductsView() {
  const {products} = useContext(ProductsContext)
  const {id} = useParams()  

  const selectedProduct = products.find((item)=> item.id == id)
  console.log(selectedProduct);
  
  return (
    <div>
        {selectedProduct ? (
          <div>
          <img src={selectedProduct.image} alt="" />
          <h1>{selectedProduct.name}</h1>
          <h2>{selectedProduct.brand}</h2>
          </div>
        ):(
          <h1>not loading</h1>
        )
  }
    </div>
  )
}

export default ProductsView
