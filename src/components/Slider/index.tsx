import styles from './styles.module.scss';
import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/apiProducts";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal"
import type { ProductTypes } from "../../types/product";

export function Slider() {
    const [products, setProducts] = useState<ProductTypes[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductTypes | null>(null);

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

    const handleOpenModal = (product: ProductTypes) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <div className={styles.sliderContainer}>
                {products.map((product) => (
                <ProductCard key={product.productName} product={product} onClick={handleOpenModal} />
                ))}
            </div>
            
            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </>
    )
}