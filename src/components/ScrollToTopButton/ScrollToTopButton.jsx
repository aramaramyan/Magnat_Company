import {useEffect, useState} from "react";
import arrowIcon from "./../../icons/arrow.svg";
import "./ScrollToTopButton.css";
import useWindowSize from "../../hooks/useWindowSize";

export default function ScrollToTopButton() {
  const [button, setButton] = useState(false);
  const [windowHeight] = useWindowSize();

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener)
    };
  }, []);

  function listener() {
    if(window.pageYOffset > 300 || window.pageYOffset === windowHeight - 1000) {
      setButton(true);
    } else {
      setButton(false);
    }
  }

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return ( button && (
    <div className="ScrollToTop">
      <div className="scroll_button_wrapper" onClick={scrollUp}>
        <img src={arrowIcon} alt="Arrow Icon"/>
      </div>
    </div>
  ));
}