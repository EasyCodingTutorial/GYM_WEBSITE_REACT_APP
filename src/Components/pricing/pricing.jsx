import "./pricing.css";
const Pricing = () => {
  return (
    <>
      <div className="pricing container">
        <div className="content">
          <h6>Our Plan</h6>
          <h5>Choose Your Pricing Plan</h5>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <h6>3 Months Unlimited</h6>
              <h5>$39</h5>
              <button className="btn">Buy Now</button>
            </div>
          </div>

          <div className="col-sm-4 active">
            <div className="box">
              <h6>12 Months Unlimited</h6>
              <h5>$99</h5>
              <button className="btn">Buy Now</button>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <h6>5 Months Unlimited</h6>
              <h5>$49</h5>
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricing;
