import { AndroidStore, AppleStore, Frame1, Frame2 } from "../assets";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-column justify-between md-px4 md-py3 relative">
      <h1 className="pl2 fw-700 gray2 left-align">Download our app now</h1>
        <div className="flex z2">
          <img src={Frame2} alt="frame-2" />
          <img src={Frame1} className="" alt="frame-1" />
        </div>
        <div className="footer-card rounded8 flex py2 absolute">
          <div className="md-col-6"></div>
          <div className="md-col-6 flex flex-column gap2 md-py9">
            <p className="footer-text h4 left-align flex-wrap px3">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex gap2 px3">
              <img src={AndroidStore} alt="android-store" />
              <img src={AppleStore} alt="apple-store" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
