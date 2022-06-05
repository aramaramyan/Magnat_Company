import React, {useState} from 'react'
import arrowIcon from "./../../../icons/arrow.svg";
import "./PhotoStack.css";

export default function PhotoStack({images}) {
  let [currentImg, setCurrentImg] = useState(0);
  const dots = Array.from(Array(images.length).keys());

  function next() {
    if(currentImg < images.length - 1) {
      const result = currentImg + 1
      setCurrentImg(result);
    } else {
      setCurrentImg(0);
    }
  }

  function prev() {
    if(currentImg === 0) {
      setCurrentImg(images.length - 1);
    } else {
      const result = currentImg - 1
      setCurrentImg(result);
    }
  }

  function doClick(number) {
    setCurrentImg(number);
  }

  return (
    <div className="PhotoStack" style={{background: `url(${images[currentImg]}) 50% 50%/ cover no-repeat`}}>
      <div className="left_arrow" onClick={prev}>
        <img src={arrowIcon} alt="Arrow Icon" className="icon24"/>
      </div>
      <div className="circles_wrapper">
        {dots.map(dot => <div key={dot} className={currentImg === dot? "dot_active" : "dot"} onClick={() => doClick(dot)} />)}
      </div>
      <div className="right_arrow" onClick={next}>
        <img src={arrowIcon} alt="Arrow Icon" className="icon24"/>
      </div>
    </div>
  );
}