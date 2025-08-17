import styles from './styles.module.scss';
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/apiProducts";
import { ProductCard } from "./ProductCard";
import type { ProductTypes } from "../../types/product";

export function Slider() {
    const [products, setProducts] = useState<ProductTypes[]>([]);

    useEffect(() => {
    async function getProducts() {
      try {
        const produtos = await fetchProducts();
        setProducts(produtos); 
      } catch (erro) {
        console.error("Erro no getProducts:", erro);
      }
    }

    getProducts();
  }, []);

    return (
         <div className={styles.sliderContainer}>
            {products.map((product) => (
            <ProductCard key={product.productName} product={product} />
            ))}
         </div>
    )
}