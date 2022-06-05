import goldHookahPNG from "./../../../img/HookahHome/hookah_gold.png";
import goldHookahOverlayPNG from "./../../../img/HookahHome/hookah_gold_overlay.png"
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="HeroSection">
      <img src={goldHookahPNG} alt="Gold Hookah"/>
      <img src={goldHookahOverlayPNG} alt="Gold Hookah Overlay" className="overlay"/>
      <p className="status1">Hookah as a new status symbol.</p>
      <p className="status2">Created by hookah fans like you</p>
    </div>
  );
}