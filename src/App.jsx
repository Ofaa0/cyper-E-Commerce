import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/MainLayout";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route
              path="productDetailsPage"
              element={<h1 className="text-black mt-12">ProductDetailsPage</h1>}
            ></Route>
            <Route path="cart" element={<CartPage />}></Route>
          </Route>
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
