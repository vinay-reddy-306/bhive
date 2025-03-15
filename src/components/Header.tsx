import { Call, Logo } from "../assets";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between col-10 mx-auto py2">
      <img src={Logo} alt="logo" width={125} height={40} />
      <img
        src={Call}
        alt="call-img"
        className="primary2 border rounded p1 shadow-2"
      />
    </header>
  );
};

export default Header;
