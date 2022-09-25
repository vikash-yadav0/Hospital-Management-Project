import { useNavigate } from "react-router-dom";
import imgLogo from '../images/logo.png'
const imgSrc =
  "http://www.dailyrounds.org/blog/wp-content/uploads/2015/05/caduceus.jpg";
const Blogo = () => {
  const navigate = useNavigate();
  return (
    <a
      style={{
        width: "10%",
        padding: "unset",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      className="navbar-brand mx-4"
      onClick={() => navigate("/Landing")}>
      <img style={{ width: "20%" }} src={imgLogo} className="img-thumbnail " />
      Meditrina Hospital
    </a>
  );
};

export default Blogo;
