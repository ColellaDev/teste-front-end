import styles from "./styles.module.scss"
import Logo from "../../assets/images/Logo.png"

type Brands = {
    name: string,
    img: string
}

const brands: Brands[] = [
    {name: "Econverse", img: Logo},
    {name: "Econverse", img: Logo},
    {name: "Econverse", img: Logo},
    {name: "Econverse", img: Logo},
    {name: "Econverse", img: Logo}
];

export function Brands() {

    return (
        <section className={styles.brandsContainer}>
            <h2>Navegue por marcas</h2>
            <div className={styles.brandsDiv}>
                {brands.map((brand, index) => (
                    <div key={index} className={styles.brandsItem}>
                        <img src={brand.img} alt={brand.name} />
                    </div>
                ))}
            </div>
        </section>
    )
}