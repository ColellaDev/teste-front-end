import styles from './styles.module.scss';
import { useEffect, useState, useRef } from "react";
import { fetchProducts } from "../../services/apiProducts";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal"
import type { ProductTypes } from "../../types/product";

export function Slider() {
    const [products, setProducts] = useState<ProductTypes[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductTypes | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

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

    const handleNext = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth; 
      sliderRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth; 
      sliderRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

    return (
        <>
          <div className={styles.sliderWrapper}>
            <button className={styles.navButton} onClick={handlePrev}>‹</button>
             <div className={styles.sliderContainer} ref={sliderRef}>
               {products.map((product) => (
                <ProductCard key={product.productName} product={product} onClick={handleOpenModal} />
               ))}
             </div>
            <button className={styles.navButton} onClick={handleNext}>›</button>
         </div>
            
          {selectedProduct && (
            <ProductModal product={selectedProduct} onClose={handleCloseModal} />
          )}
        </>
    )
}