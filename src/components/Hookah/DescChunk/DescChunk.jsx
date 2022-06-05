import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./DescChunk.css";
import {useRef} from "react";
import {useEffect} from "react";
import useWindowSize from "../../../hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger);

export default function DescChunk({img, desc, isLeft, bg}) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [windowWidth] = useWindowSize();


  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;

    function gsapDirection(width) {
      if (width > 1024) {
        return 450;
      } else if (width <= 1024 && width > 900) {
        return 390;
      } else if (width <= 900 && width > 700) {
        return 300;
      } else if (width <= 700 && width > 480) {
        return 200;
      } else {
        return 150;
      }
    }

    gsap.to(left, {
      x: gsapDirection(windowWidth),
      duration: 3,
      scrollTrigger: {
        trigger: left,
        // markers: true;
        start: "top 80%",
        end: "90% 80px",
      }
    });

    gsap.to(right, {
      x: -(gsapDirection(windowWidth)),
      duration: 3,
      scrollTrigger: {
        trigger: right,
        // markers: true,
        start: "top 80%",
        end: "90% 80px",
      }
    });
  }, []);

  return isLeft ? (
    <div className={`DescChunk ${bg}`}>
      <img
        ref={leftRef}
        src={img}
        alt="Hookah Image"
        className="desc_img_left"
      />
      <div ref={rightRef} className="desc_right">
        <p>{desc}</p>
      </div>
    </div>
  ) : (
    <div className={`DescChunk ${bg}`}>
      <div ref={leftRef} className="desc_left">
        <p>{desc}</p>
      </div>
      <img
        ref={rightRef}
        src={img}
        alt="Hookah Image"
        className="desc_img_right"
      />
    </div>
  );
}