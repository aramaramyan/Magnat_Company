import {useSelector} from "react-redux";
import DescChunk from "../../../components/Hookah/DescChunk/DescChunk";
import HeroSection from "../../../components/Hookah/HeroSection/HeroSection";
import HookahFooter from "../../../components/Hookah/HookahFooter/HookahFooter";
import image1 from "../../../img/HookahHome/1.png";
import image2 from "../../../img/HookahHome/2.png";
import image3 from "../../../img/HookahHome/3.png";
import image4 from "../../../img/HookahHome/4.png";
import image5 from "../../../img/HookahHome/5.png";
import "./HookahHome.css";

export default function HookahHome() {
  const descArr = useSelector(state => state.app.descriptionsArray);

  return (
    <div className="HookahHome">
      <HeroSection />
      <div className="hookah_home_content">
        <DescChunk img={image1} desc={descArr[0]} isLeft={true} bg="bg1" />
        <DescChunk img={image2} desc={descArr[1]} isLeft={false} bg="bg2" />
        <DescChunk img={image3} desc={descArr[2]} isLeft={true} bg="bg3" />
        <DescChunk img={image4} desc={descArr[3]} isLeft={false} bg="bg4" />
        <DescChunk img={image5} desc={descArr[4]} isLeft={true} bg="bg5" />
        <div className="hide"/>
        <HookahFooter />
      </div>
    </div>
  );
}