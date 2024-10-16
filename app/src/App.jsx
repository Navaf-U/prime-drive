import './App.css'
import AppRoutes from './AppRoutes'
import ProductsProvider from './Context/ProductsProvider'

function App() {


  return (
    <>
    <ProductsProvider>
    <AppRoutes/>
    </ProductsProvider>
    </>
  )
}

export default App
