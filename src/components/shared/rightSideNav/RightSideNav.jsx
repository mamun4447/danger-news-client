import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const RightSideNav = () => {
  const { GoogleSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleGooglePopUp = (event) => {
    event.preventDefault();

    GoogleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <Link className="block">
        <button
          onClick={handleGooglePopUp}
          className="btn btn-outline btn-info gap-1"
        >
          <FaGoogle /> Login With Google
        </button>
      </Link>
      <button className="btn btn-outline btn-dark my-2 gap-1">
        <FaGithub />
        Login With GitHub
      </button>
      <h3 className="text-xl text-left ml-16 mb-1">Find us on</h3>
      <div className="btn-group btn-group-vertical gap-1 w-48">
        <button className="btn gap-2">
          <FaFacebook /> Facebook
        </button>
        <button className="btn gap-2">
          <FaWhatsapp /> WhatsApp
        </button>
        <button className="btn gap-2">
          <FaTwitter /> Twitter
        </button>
        <button className="btn gap-2">
          <FaTwitch /> Twitch
        </button>
        <button className="btn gap-2">Button</button>
      </div>
      {/* carusele */}
      {/* carusele */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="../../../assets/Brand1.png" alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="../../../assets/Brand2.png" alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
