import {useNavigate} from "react-router";
import arrowIcon from "./../../../icons/arrow.svg";
import "./DesignHome.css";

export default function DesignHome() {
  const navigate = useNavigate();

  function goToMain() {
    navigate("/");
  }

  return (
    <div className="DesignHome">
      <div className="design_content">
        <div className="design_img"/>
        <h3>This page isn't available at the moment</h3>
        <p>This may be because of a technical error that we are working to fix.</p>
        <div className="go_to_main" onClick={goToMain}>
          <img src={arrowIcon} alt="Arrow Icon"/>
          <p>Back to main page</p>
        </div>
      </div>
    </div>
  );
}