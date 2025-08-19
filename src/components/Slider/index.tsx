import styles from './styles.module.scss';
import { useEffect, useState, useRef } from "react";
import { fetchProducts } from "../../services/apiProducts";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal"
import type { ProductTypes } from "../../types/product";

export function Slider() {
    const [products, setProducts] = useState<ProductTypes[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductTypes | null>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
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

    const checkScrollPosition = () => {
        const slider = sliderRef.current;
        if (slider) {
            const { scrollLeft, scrollWidth, clientWidth } = slider;
            setIsAtStart(scrollLeft < 1);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        slider?.addEventListener('scroll', checkScrollPosition);
        window.addEventListener('resize', checkScrollPosition);
        checkScrollPosition();

        return () => {
            slider?.removeEventListener('scroll', checkScrollPosition);
            window.removeEventListener('resize', checkScrollPosition);
        };
    }, [products]); 

    const handleOpenModal = (product: ProductTypes) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const scrollNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
        }
    };

    const scrollPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className={styles.sliderWrapper}>
                <button
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={scrollPrev}
                    disabled={isAtStart}
                    aria-label="Anterior"
                >‹</button>
                <div className={styles.sliderContainer} ref={sliderRef}>
                    {products.map((product) => (
                        <ProductCard key={product.productName} product={product} onClick={handleOpenModal} />
                    ))}
                </div>
                <button
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={scrollNext}
                    disabled={isAtEnd}
                    aria-label="Próximo"
                >›</button>
            </div>

            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </>
    )
}