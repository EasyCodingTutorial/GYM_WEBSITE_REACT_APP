import Team1 from "../../Images/team1.jpg";
import Team2 from "../../Images/team2.jpg";
import Team3 from "../../Images/team3.jpg";
import "./team.css";
const Team = () => {
  return (
    <>
      <div className="team container">
        <div className="content">
          <h6>Our Team</h6>
          <h5>Meet Our Experts</h5>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Team1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Team2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Team3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
