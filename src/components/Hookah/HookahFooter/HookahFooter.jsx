import {useState} from "react";
import {useNavigate} from "react-router";
import useWindowSize from "../../../hooks/useWindowSize";
import digit1 from "./../../../icons/1.svg";
import digit2 from "./../../../icons/2.svg";
import digit3 from "./../../../icons/3.svg";
import digit4 from "./../../../icons/4.svg";
import shapeIcon from "./../../../icons/shape_circle.svg";
import "./HookahFooter.css";

export default function HookahFooter() {
  const [section, setSection] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const navigate = useNavigate();
  const [windowWidth] = useWindowSize();

  function toHome() {
    navigate("/hookah");
  }

  function toProducts() {
    navigate("/hookah/products");
  }

  function toProfile() {
    navigate("/hookah/profile");
  }

  function toBasket() {
    navigate("/hookah/basket");
  }

  function toPolicy() {
    navigate("/hookah/policy");
  }

  function toggleSection1() {
    setSection(prevState => {
      return {
        ...prevState,
        one: !prevState.one
      }
    })
  }

  function toggleSection2() {
    setSection(prevState => {
      return {
        ...prevState,
        two: !prevState.two
      }
    })
  }

  function toggleSection3() {
    setSection(prevState => {
      return {
        ...prevState,
        three: !prevState.three
      }
    })
  }

  function toggleSection4() {
    setSection(prevState => {
      return {
        ...prevState,
        four: !prevState.four
      }
    })
  }

  return (
    <div className="HookahFooter">
      <section>
        <div className="section_title">
          <h2 className="title">MAGNAT HOOKAHS</h2>
          <img src={shapeIcon} alt="ShapeIcon" onClick={toggleSection1} className={section.one ? "rotate180" : ""}/>
        </div>
        {(windowWidth > 700 || section.one) && (
          <>
            <p className="subtitle">Design, Quality, Performance</p>
            <p>
              Magnat Hookahs designed and produced in Russia since 2018. In a short time, Magnat Hookahs gained worldwide
              popularity. You can find them in the US, Germany, Switzerland, France, Czech Republic, Hong Kong and other
              countries.
            </p>
            <p className="subtitle">Join the MAGNAT team!</p>
          </>
        )
        }
      </section>
      <section>
        <div className="section_title">
          <h2 className="title">WHY MAGNAT?</h2>
          <img src={shapeIcon} alt="ShapeIcon" onClick={toggleSection2} className={section.two ? "rotate180" : ""}/>
        </div>
        {(windowWidth > 700 || section.two) && (
          <>
            <div className="wrapper">
              <img src={digit1} alt="Digit Icon" className="icon24" draggable={false}/>
              <p>Modern hookah for those, who paid attention to every little thing.</p>
            </div>
            <div className="wrapper">
              <img src={digit2} alt="Digit Icon" className="icon24" draggable={false}/>
              <p>Perfect for professional or home use.</p>
            </div>
            <div className="wrapper">
              <img src={digit3} alt="Digit Icon" className="icon24" draggable={false}/>
              <p>Production of hookahs with custom design.</p>
            </div>
            <div className="wrapper">
              <img src={digit4} alt="Digit Icon" className="icon24" draggable={false}/>
              <p>Extraordinary design and functionality.</p>
            </div>
          </>
        )}
      </section>
      <section>
        <div className="section_title">
          <h2 className="title">SITE MAP</h2>
          <img src={shapeIcon} alt="ShapeIcon" onClick={toggleSection3} className={section.three ? "rotate180" : ""}/>
        </div>
        {(windowWidth > 700 || section.three) && (
          <>
            <div className="wrapper" onClick={toHome}>
              <img src={shapeIcon} alt="Shape Icon" className="icon24" draggable={false}/>
              <p className="subtitle navigate">Home</p>
            </div>
            <div className="wrapper" onClick={toProducts}>
              <img src={shapeIcon} alt="Shape Icon" className="icon24" draggable={false}/>
              <p className="subtitle navigate">Products</p>
            </div>

            <div className="wrapper" onClick={toProfile}>
              <img src={shapeIcon} alt="Shape Icon" className="icon24" draggable={false}/>
              <p className="subtitle navigate">Profile</p>
            </div>
            <div className="wrapper" onClick={toBasket}>
              <img src={shapeIcon} alt="Shape Icon" className="icon24" draggable={false}/>
              <p className="subtitle navigate">Basket</p>
            </div>
            <div className="wrapper" onClick={toPolicy}>
              <img src={shapeIcon} alt="Shape Icon" className="icon24" draggable={false}/>
              <p className="subtitle navigate">Terms & Policy</p>
            </div>
          </>
        )}
      </section>
      <section className="section_info">
        <div className="section_title">
          <h2 className="title">COMPANY INFO</h2>
          <img src={shapeIcon} alt="ShapeIcon" onClick={toggleSection4} className={section.four ? "rotate180" : ""}/>
        </div>
        {(windowWidth > 700 || section.four) && (
          <>
            <div className="wrapper">
              <p className="subtitle">Call us:</p>
              <p className="subtitle">+(374) 94 377366</p>
            </div>
            <div className="wrapper">
              <p className="subtitle">eMail:</p>
              <p className="subtitle">magnathookah@mail.ru</p>
            </div>
            <div className="wrapper_column">
              <p className="subtitle">Mon-Fri | 10<sup>00</sup> - 19<sup>00</sup> (UTC + 4)</p>
              <p className="subtitle"> 121471, Moscow, st. Ryabinovaya, 41/1, office 415 А</p>
            </div>
          </>
          )
        }
      </section>
    </div>
  );
}
