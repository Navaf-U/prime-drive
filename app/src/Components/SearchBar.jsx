import { useState } from "react"
import { useDispatch } from "react-redux"
import { filteredProducts } from "../Slices/productsSlice"
import { NavLink } from "react-router-dom"

function SearchBar() {
  const [query,setQuery] = useState('')
  const dispatch = useDispatch()
  const handleSearch = ()=>{
    dispatch(filteredProducts(query))
  }
    return (
       <div>
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                className="outline-none border border-gray-300 border-e-0 px-2 py-1"
                onChange={(e) => setQuery(e.target.value)}
            />
            <NavLink to="/search">
            <button onClick={handleSearch} className="border-s-0 border border-gray-300 pe-1 py-1">Search</button>
            </NavLink>
        </div>
  )
}

export default SearchBar
