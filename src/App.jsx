import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/MainLayout";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";
import LogInPage from "./pages/LogInPage";
import SingUpPage from "./pages/SingUpPage";
import ProductDetailes from "./pages/ProductDetailes";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <MainLayout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />}></Route>
            <Route
              path="productDetailsPage/:productId"
              element={<ProductDetailes />}
            ></Route>
            <Route path="cart" element={<CartPage />}></Route>
          </Route>
          <Route path="/login" element={<LogInPage />}></Route>
          <Route path="/signup" element={<SingUpPage />}></Route>
          <Route
            path="*"
            element={<h1 className="text-black pt-12">404 | page not found</h1>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
