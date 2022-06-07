import ScrollStart from "../../../components/ScrollStart/ScrollStart";
import Navbar from "../../../components/Navbar/Navbar";
import Products from "../../../components/Hookah/Products/Products";
import HookahFooter from "../../../components/Hookah/HookahFooter/HookahFooter";
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton";
import getBasketCount from "../../../helpers/getBasketCount";
import "./HookahProducts.css";

export default function HookahProducts() {
  const basketCount = getBasketCount();

  return (
    <div className="HookahProducts">
      <ScrollStart />
      <Navbar count={basketCount}/>
      <div className="hookah_products_container">
        <div className="products_hero_section" />
        <Products />
        <HookahFooter />
        <ScrollToTopButton />
      </div>
    </div>
  );
}