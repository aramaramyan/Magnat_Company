import "./ProfileLoader.css";

export default function ProfileLoader() {
  return (
    <div className="ProfileLoader">
      <div className="aside_loader">
        <div className="avatar-loader" />
        <div className="input_loader"/>
        <div className="input_loader"/>
        <div className="input_loader"/>
      </div>
      <div className="content_loader">
        <div className="left">
          <div className="input_loader"/>
          <div className="input_loader"/>
          <div className="input_loader"/>
        </div>
        <div className="left">
          <div className="input_loader"/>
          <div className="input_loader"/>
        </div>
      </div>
    </div>
  );
}