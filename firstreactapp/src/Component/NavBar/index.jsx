import { useNavigate } from "react-router-dom";
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
      onClick={() => navigate("/Landing")}
    >
      <img style={{ width: "20%" }} src={imgSrc} className="img-thumbnail" />
      Meditrina Hospital
    </a>
  );
};

export default Blogo;
