import HeaderImg from "../../Images/header.jpg";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <div className="img">
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="HeaderContent">
          <h6>Just Give A One More Try....</h6>
        </div>
      </div>
    </>
  );
};
export default Header;
