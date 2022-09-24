import { useNavigate } from "react-router-dom";
import imgLogo from '../images/logo.png'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="Container my-4">
        <footer className="py-6 " style={{position:"absolute",bottom:"0",width:"100%"}}>
          <ul className="nav justify-content-center  bg-primary ">
            <li className="nav-item">
              <a
                onClick={() => navigate("/Landing")}
                className="nav-link px-2 text-light"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                About
              </a>
            </li>
          </ul>
          <p className="text-center  bg-primary text-light">
            © 2022 Company, Inc
          </p>
        </footer>
      
    
    </div>
  );
};

export default Footer;
