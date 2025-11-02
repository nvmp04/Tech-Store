import { Route, Routes } from "react-router-dom";
import Homepage from '../features/home/pages/Homepage'
import { ProtectedRoute } from "./ProtectedRoute";
import UserLayout from "../layouts/UserLayout";
import ProductsPage from "../features/products/pages/ProductsPage";
import ProductDetailPage from "../features/products/pages/ProductDetailPage";
import CartPage from "../features/cart/pages/CartPage";
import CheckoutPage from "../features/checkout/pages/CheckoutPage";
function AppRoutes(){
    return (
        <Routes>
            {/* <Route path="" element={<Homepage/>}/> */}
            <Route element={<ProtectedRoute allowedRole={"user"}/>}>
                <Route path="/" element={<UserLayout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="products" element={<ProductsPage/>}/>
                    <Route path="products/:category" element={<ProductsPage/>}/>
                    <Route path="/product/:id" element={<ProductDetailPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Route>
            </Route>
        </Routes>
    )
}
export default AppRoutes;