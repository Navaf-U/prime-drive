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
                onChange={(e) => setQuery(e.target.value)}
            />
            <NavLink to="/search">
            <button onClick={handleSearch}>Search</button>
            </NavLink>
        </div>
  )
}

export default SearchBar
