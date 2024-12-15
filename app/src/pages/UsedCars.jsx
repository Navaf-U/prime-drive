import { useEffect } from "react";
import Card from "../Components/shared/Card";
import { useDispatch, useSelector } from "react-redux";
import {fetchProducts} from "../Slices/productsSlice"
function UsedCars() {
    const { products,loading, error  } = useSelector((state)=>state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchProducts())
    },[dispatch])

    if(loading){
      return <p>Loading...</p>
    }
    if(error){
      return <p>{error}</p>
    }
  return (
    <div className="">
       <div className="mt-28 flex items-center justify-center gap-5 flex-wrap">
        {products.map((item) => (
          <div key={item._id}>
            <Card
              id={item._id}
              name={item.name}
              model={item.model}
              company={item.company}
              years_old={item.years_old}
              previous_owners={item.previous_owners}
              rate={item.rate}
              description={item.description}
              image={item.image}
              type={item.type}
              seats={item.seats}
              mileage={item.mileage}
              fuel_type={item.fuel_type}
              transmission={item.transmission}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsedCars
