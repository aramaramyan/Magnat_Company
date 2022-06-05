import {useEffect, useState} from "react";
import useFirestore from "../../../hooks/useFirestore";
import HookahItem from "../HookahItem/HookahItem";
import LoadingItem from "../LoadingItem/LoadingItem";
import TobaccoItem from "../TobaccoItem/TobaccoItem";
import hookahIcon from "./../../../icons/hookah.svg";
import leafIcon from "./../../../icons/leaf.png";
import "./Products.css";

const productLoadingArr = Array.from(Array(4).keys());

export default function Products() {
  const [hookahs, setHookahs]= useState([]);
  const [tobaccos, setTobaccos] = useState([]);
  const { subscribeToCollection } = useFirestore();

  useEffect(() => {
    const hookahUnsub = subscribeToCollection("hookahs", setHookahs);
    const tobaccoUnsub = subscribeToCollection("tobaccos", setTobaccos);

    return () => {
      hookahUnsub();
      tobaccoUnsub()
    }
  }, []);

  return (
    <div className="Products">
      <div className="title">
        <img src={hookahIcon} alt="Hookah Icon" draggable={false} className="icon32"/>
        <h2>Hookahs</h2>
      </div>
      <div className="products_content">
        {hookahs[0] ? (
          <>
            {hookahs.map(hookah => <HookahItem key={hookah.id} hookah={hookah}/>)}
          </>
        ) : (
          <div className="loading">
            {productLoadingArr.map(skeleton => <LoadingItem key={skeleton}/>)}
          </div>
        )}
      </div>
      <div className="title">
        <img src={leafIcon} alt="Leaf Icon" draggable={false} className="icon32"/>
        <h2>Tobacco</h2>
      </div>
      <div className="products_content">
        {tobaccos[0] ? (
            <>
              {tobaccos.map(tobacco => <TobaccoItem key={tobacco.id} tobacco={tobacco}/>)}
            </>
        ) : (
          <div className="loading">
            {productLoadingArr.map(skeleton => <LoadingItem key={skeleton}/>)}
          </div>
        )}
      </div>
    </div>
  );
}