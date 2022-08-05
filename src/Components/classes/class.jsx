import "./class.css";
import Class1 from "../../Images/class1.jpg";
import Class2 from "../../Images/class2.jpg";
import Class3 from "../../Images/class3.jpg";
import Class4 from "../../Images/class4.jpg";
import Class5 from "../../Images/class5.jpg";
const Classes = () => {
  return (
    <>
      <div className="classes container">
        <div className="content">
          <h6>Our Classes</h6>
          <h5>What We Can Offer</h5>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Class1} className="img-fluid" alt="" />
              <div className="boxContent">
                <h6>Strength</h6>
                <h5>WeightLifting</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Class2} className="img-fluid" alt="" />
              <div className="boxContent">
                <h6>Strength</h6>
                <h5>WeightLifting</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Class3} className="img-fluid" alt="" />
              <div className="boxContent">
                <h6>Strength</h6>
                <h5>WeightLifting</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div className="row justify-content-center">
          <div className="col-sm-5">
            <div className="box">
              <img src={Class4} className="img-fluid" alt="" />
              <div className="boxContent">
                <h6>Strength</h6>
                <h5>WeightLifting</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="box">
              <img src={Class5} className="img-fluid" alt="" />
              <div className="boxContent">
                <h6>Strength</h6>
                <h5>WeightLifting</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Classes;
