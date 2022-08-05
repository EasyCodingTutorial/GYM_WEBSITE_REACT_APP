import "./second.css";
import SecondHeaderImg from "../../Images/second_header.jpg";
const SecondHeader = () => {
  return (
    <>
      <div className="second_header">
        <div>
          <div className="img">
            <img src={SecondHeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="SecondHeaderContent">
          <h6>Register Now To Get More Deals</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            ipsum libero sapiente eaque iste.
          </p>
          <button className="btn">Register</button>
        </div>
      </div>
    </>
  );
};
export default SecondHeader;
