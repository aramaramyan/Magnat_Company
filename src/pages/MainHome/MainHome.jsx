import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import getBasketCount from "../../helpers/getBasketCount";
import "./MainHome.css";

export default function MainHome() {
  const basketCount = getBasketCount();
  const [side, setSide] = useState("");
  const navigation = useNavigate();


  function navToDesign() {
    navigation("/design");
  }

  function navToHookah() {
    navigation("/hookah");
  }

  function hoverLeft() {
    setSide("hover-left");
  }

  function hoverRight() {
    setSide("hover-right");
  }

  return (
    <div className="MainHome">
      <Navbar count={basketCount}/>
      <div className={`home_content ${side}`}>
        <div className="split left" onMouseEnter={hoverLeft} onClick={navToDesign}>
          <div className="home_design">
            <div className="text">
              <p className="subtitle">Have no fear of perfection<br />You’ll never reach it</p>
              <h1 className="title">Make it simple, <br/> but significant</h1>
            </div>
          </div>
        </div>
        <div className="split right" onMouseEnter={hoverRight} onClick={navToHookah}>
          <div className="home_hookah">
            <div className="text">
              <p className="subtitle">The austerity of luxury</p>
              <h1 className="title">Inhale<br/>the best,<br/>exhale<br/>the stress</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}