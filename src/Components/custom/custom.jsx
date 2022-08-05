import Custom1 from "../../Images/custom1.jpg";
import Custom2 from "../../Images/custom2.jpg";
import Custom3 from "../../Images/custom3.jpg";
import Custom4 from "../../Images/custom4.jpg";
import Custom5 from "../../Images/custom5.jpg";
import Custom6 from "../../Images/custom6.jpg";
import "./custom.css";
const Custom = () => {
  return (
    <>
      <div className="custom container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-5">
            <img src={Custom1} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-3">
            <img src={Custom2} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-3">
            <img src={Custom3} className="img-fluid" alt="" />
          </div>
        </div>

        {/* Second Row */}
        <div className="row justify-content-center">
          <div className="col-sm-3">
            <img src={Custom4} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-3">
            <img src={Custom5} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-5">
            <img src={Custom6} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Custom;
