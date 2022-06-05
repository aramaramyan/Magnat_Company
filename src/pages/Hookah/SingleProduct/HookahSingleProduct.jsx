import {useSelector} from "react-redux";
import Navbar from "../../../components/Navbar/Navbar";
import HookahFooter from "../../../components/Hookah/HookahFooter/HookahFooter";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import useFirestore from "../../../hooks/useFirestore";
import PhotoStack from "../../../components/Hookah/PhotoStack/PhotoStack";
import isFavorite from "../../../helpers/isFavorite";
import AddButton from "../../../components/AddButton/AddButton";
import Reviews from "../../../components/Reviews/Reviews";
import getBasketCount from "../../../helpers/getBasketCount";
import addProductToBasket from "../../../helpers/addProductToBasket";
import removeProductFromBasket from "../../../helpers/removeProductFromBasket";
import starGold from "./../../../icons/starGold.svg";
import starIcon from "./../../../icons/star.svg";
import "./SingleProduct.css";

export default function HookahSingleProduct() {
  const [hookah, setHookah] = useState({});
  const [user, setUser] = useState({});
  const [render, setRender] = useState(0);
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);
  const basketCount = getBasketCount();
  const {id: hookahID} = useParams();
  const {
    subscribeToProduct,
    subscribeToUser,
    pushDataToFavorites,
    popDataToFavorites,
    incrementProductStars
  } = useFirestore();

  useEffect(() => {
    const unsubHookah = subscribeToProduct("hookahs", hookahID, setHookah);
    const unsubUser = subscribeToUser(setUser);

    return () => {
      unsubHookah();
      unsubUser();
    }
  }, []);

  function addToFavorites() {
    pushDataToFavorites(hookahID);
    incrementProductStars("hookahs", hookahID, 1);
  }

  function removeFromFavorites() {
    popDataToFavorites(hookahID);
    incrementProductStars("hookahs", hookahID, -1);
  }

  function addDataToBasket() {
    const data = {
      count: 1,
      id: hookah.id,
      title: hookah.title,
      color: hookah.color,
      price: hookah.price,
      image: hookah.images[2]
    }

    addProductToBasket(data);
    setRender(render + 1);
  }

  function removeDataFromBasket() {
    removeProductFromBasket(hookahID);
    setRender(render + 1);
  }

  return (
    <div className={`HookahSingleProduct ${isBurgerOpen ? "burger_open" : ""}`}>
      <Navbar count={basketCount}/>
      {hookah.title ? (
        <div className="container">
          <div className="single_product_img">
            <PhotoStack images={hookah.images}/>
          </div>
          <div className="single_product_content">
            <div className="single_product_description">
              <div className="add_to_basket_section">
                <h2>MAGNAT HOOKAH</h2>
                <h2>{hookah.title}</h2>
                <h3>Color: {hookah.color}</h3>
                <h3>Stars: {hookah.stars}</h3>
                <div className="favorite_mark">
                  <h3>Mark as favorite</h3>
                  {isFavorite(user.favorites, hookah.id) ?
                    <img src={starGold} alt="Star Gold Icon" className="icon24"
                         onClick={removeFromFavorites}/> :
                    <img src={starIcon} alt="Star Icon" className="icon24" onClick={addToFavorites}/>}
                </div>
                <h3>Price: {hookah.price}$</h3>
                <AddButton id={hookah.id} add={addDataToBasket} remove={removeDataFromBasket}/>
              </div>
              <div className="description_section">
                <h3>Specifications:</h3>
                <p>• Shaft height assembled (without flask): 630 mm</p>
                <p>• Shaft inner diameter: 12mm</p>
                <p>• The diameter of the seat in the flask (with seal): 45 mm</p>
                <p>• Mouthpiece length: 320 mm</p>
                <p>• Mouthpiece seat diameter: 12 mm</p>
                <p>• Weight of hookah assembly (without flask): 1.600 g</p>
                <p>• Saucer diameter: 190mm</p>
              </div>
            </div>
            <div className="single_product_reviews">
              <Reviews type="hookahs" user={user} product={hookah}/>
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