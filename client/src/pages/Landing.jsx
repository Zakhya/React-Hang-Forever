import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            magnam tempora unde, eos amet, aut dignissimos consequatur
            temporibus voluptates maiores sed quisquam. Quas, commodi eligendi
            corrupti cum ipsam voluptatibus eaque?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
