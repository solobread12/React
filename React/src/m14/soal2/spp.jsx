import { ProductList,ProductDetail,ProfileDetail } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <ProductList /> },
    { path: "/product/:id", element: <ProductDetail /> },
    { path: "/profile/:userId", element: <ProfileDetail /> },
    
]);

function App() {
    return <RouterProvider router={router} />
}

export default App;