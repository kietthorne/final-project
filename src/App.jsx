import MainMenu from "@/layout/MainMenu/MainMenu";
import { RouterProvider } from "react-router-dom";
import { router } from '@Router/router';
import Products from "@/components/Products/Products";

export default function App() {
  return (
    <><RouterProvider router={router} />
    </>
  )
}
