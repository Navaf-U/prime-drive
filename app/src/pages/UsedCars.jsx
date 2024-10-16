import { useContext } from "react";
import { ProductsContext } from "../Context/ProductsProvider";
import Card from "../Components/shared/Card";

function UsedCars() {
    const { products } = useContext(ProductsContext);
  return (
    <div className="">
       <div className="mt-28 flex items-center justify-center gap-5 flex-wrap">
        {products.map((item) => (
          <div key={item.id}>
            <Card
              id={item.id}
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
