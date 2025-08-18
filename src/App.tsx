import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Categories } from "./components/Categories"
import { Partners } from "./components/Partners"
import { ProductNav } from "./components/ProductNav";
import { Slider } from "./components/Slider";
import { Brands } from "./components/Brands";
import { NewsLetter } from "./components/NewsLetter";
import { Footer } from "./components/Footer";
import { FooterCopyright } from "./components/FooterCopyright";

export function App() {

  return (
    <>
      <Header />
      <Hero/>
      <Categories/>
      <ProductNav/>
      <Slider/>
      <Partners/>
      <Brands/>
      <NewsLetter/>
      <Footer/>
      <FooterCopyright/>
    </>
  )
}