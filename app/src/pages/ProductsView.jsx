import { useContext} from "react"
import { ProductsContext } from "../Context/ProductsProvider"
import { useParams } from "react-router-dom"

function ProductsView() {
  const {products} = useContext(ProductsContext)
  const {id} = useParams()  

  const selectedProduct = products.find((item)=> item.id === id)
  console.log(selectedProduct);
  
  return (
    <div>
        {selectedProduct && Object.keys(selectedProduct).map((item) =>{
            return <div key={item.id}>
                <img src={item.image}alt="" />
                <h1>{item.name}</h1>
                <h2>{item.brand}</h2>
            </div>
        })}
    </div>
  )
}

export default ProductsView
