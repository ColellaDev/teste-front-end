import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Categories } from "./components/Categories"
import { Partners } from "./components/Partners"

import { useEffect } from "react";
import { fetchProducts } from "./services/apiProducts";
import { ProductNav } from "./components/ProductNav";

export function App() {

  useEffect(() => {
    async function testFetch() {
      try {
        const produtos = await fetchProducts();
        console.log("Produtos buscados:", produtos);
      } catch (erro) {
        console.error("Erro no teste do fetch:", erro);
      }
    }

    testFetch();
  }, []);

  return (
    <>
      <Header />
      <Hero/>
      <Categories/>
      <ProductNav/>
      <Partners/>
    </>
  )
}