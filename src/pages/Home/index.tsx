import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Categories } from "../../components/Categories"
import { Partners } from "../../components/Partners"
import { ProductNav } from "../../components/ProductNav";
import { Brands } from "../../components/Brands";
import { NewsLetter } from "../../components/NewsLetter";
import { Footer } from "../../components/Footer";
import { FooterCopyright } from "../../components/FooterCopyright";
import { RelatedProducts } from "../../components/RelatedProducts";

export function Home() {

  return (
    <>
      <Header />
      <Hero/>
      <Categories/>
      <ProductNav/>
      <Partners/>
      <RelatedProducts/>
      <Partners/>
      <Brands/> 
      <RelatedProducts/>
      <NewsLetter/>
      <Footer/>
      <FooterCopyright/>
    </>
  )
}