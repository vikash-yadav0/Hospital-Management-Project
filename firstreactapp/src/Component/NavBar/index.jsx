import { useNavigate } from "react-router-dom";
import imgLogo from '../images/logo.png'
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
