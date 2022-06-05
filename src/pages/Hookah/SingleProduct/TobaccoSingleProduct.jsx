import {useSelector} from "react-redux";
import Navbar from "../../../components/Navbar/Navbar";
import HookahFooter from "../../../components/Hookah/HookahFooter/HookahFooter";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import useFirestore from "../../../hooks/useFirestore";
import starIcon from "../../../icons/star.svg";
import starGold from "../../../icons/starGold.svg";
import isFavorite from "../../../helpers/isFavorite";
import BuyButton from "../../../components/AddButton/AddButton";
import Reviews from "../../../components/Reviews/Reviews";
import "./SingleProduct.css";
import getBasketCount from "../../../helpers/getBasketCount";
import addProductToBasket from "../../../helpers/addProductToBasket";
import removeProductFromBasket from "../../../helpers/removeProductFromBasket";

export default function TobaccoSingleProduct() {
  const [tobacco, setTobacco] = useState({});
  const [user, setUser] = useState({});
  const [render, setRender] = useState(0);
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);
  const basketCount = getBasketCount();
  const {id: tobaccoID} = useParams();
  const {
    subscribeToProduct,
    subscribeToUser,
    pushDataToFavorites,
    popDataToFavorites,
    incrementProductStars
  } = useFirestore();

  useEffect(() => {
    const unsubTobacco = subscribeToProduct("tobaccos", tobaccoID, setTobacco);
    const unsubUser = subscribeToUser(setUser);

    return () => {
      unsubTobacco();
      unsubUser();
    }
  }, []);

  function addToFavorites() {
    pushDataToFavorites(tobaccoID);
    incrementProductStars("tobaccos", tobaccoID, 1);
  }

  function removeFromFavorites() {
    popDataToFavorites(tobaccoID);
    incrementProductStars("tobaccos", tobaccoID, -1);
  }

  function addDataToBasket() {
    const data = {
      count: 1,
      id: tobacco.id,
      title: tobacco.title,
      flavor: tobacco.flavor,
      price: tobacco.price,
      image: tobacco.image
    }

    addProductToBasket(data);
    setRender(render + 1);
  }

  function removeDataFromBasket() {
    removeProductFromBasket(tobaccoID);
    setRender(render + 1);
  }

  return (
    <div className={`TobaccoSingleProduct ${isBurgerOpen ? "burger_open" : ""}`}>
      <Navbar count={basketCount}/>
      {tobacco.title ? (
        <div className="container">
          <div className="single_product_img">
            <img src={tobacco.image} alt="Tobacco Image" className="tobacco_img"/>
          </div>
          <div className="single_product_content">
            <div className="single_product_description">
              <div className="add_to_basket_section">
                <h2>MAGNAT TOBACCO</h2>
                <h2>{tobacco.title}</h2>
                <h3>Flavor: {tobacco.flavor}</h3>
                <h3>Stars: {tobacco.stars}</h3>
                <div className="favorite_mark">
                  <h3>Mark as favorite</h3>
                  {isFavorite(user.favorites, tobacco.id) ?
                    <img src={starGold} alt="Star Gold Icon" className="icon24"
                         onClick={removeFromFavorites}/> :
                    <img src={starIcon} alt="Star Icon" className="icon24" onClick={addToFavorites}/>}
                </div>
                <h3>Price: {tobacco.price}$</h3>
                <BuyButton id={tobacco.id} add={addDataToBasket} remove={removeDataFromBasket}/>
              </div>
              <div className="description_section">
                <h3>Specifications:</h3>
                <p>• Smokiness</p>
                <p>• Bright taste</p>
                <p>• Juiciness</p>
                <p>• Heat resistance</p>
                <p>• Weight: (net) 250 g</p>
                <p>• Origin of tobacco flavors: Germany</p>
                <p>• Packing: Plastic bag, cardboard envelope</p>
              </div>
            </div>
            <div className="single_product_reviews">
              <Reviews type="tobaccos" user={user} product={tobacco}/>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2>Loading...</h2>
        </div>

      )}
      <HookahFooter/>
    </div>
  );
}