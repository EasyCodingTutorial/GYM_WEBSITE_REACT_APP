import "./about.css";
import AboutImg from "../../Images/why.png";
const About = () => {
  return (
    <>
      <div className="about container">
        <div className="content">
          <h6>Awesome Features</h6>
          <h5>Why You Choose us</h5>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div>
              <h6>Qualified Instructor</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident laboriosam obcaecati doloribus recusandae aliquam.
              </p>
            </div>
            <div>
              <h6>Qualified Instructor</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident laboriosam obcaecati doloribus recusandae aliquam.
              </p>
            </div>
          </div>

          <div className="col-sm-4">
            <img src={AboutImg} className="img-fluid" alt="" />
          </div>

          <div className="col-sm-4">
            <div>
              <h6>Qualified Instructor</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident laboriosam obcaecati doloribus recusandae aliquam.
              </p>
            </div>
            <div>
              <h6>Qualified Instructor</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident laboriosam obcaecati doloribus recusandae aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
