import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

//Function
const SignUp = () => {
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);
  const { CreateUser, UpdateProfile, veryfieEmailAddress } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const acceptCondition = (event) => {
    setAccept(event.target.checked);
  };

  //handle on click
  const handledSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photoURL = event.target.photo.value;
    const password = event.target.password.value;
    const confirm = event.target.confirm.value;

    // console.log(name, email, photoURL, password, confirm);

    if (password !== confirm) {
      setError("Password doesn't same");
    } else {
      CreateUser(email, password)
        .then((result) => {
          UpdateProfile(name, photoURL)
            .then((result) => {})
            .catch((error) => console.log(error));
          form.reset();
          setError("");
          handleVeryfieEmail();
          toast.success("Please check your email !!");
          navigate(from, { replace: true });
        })
        .catch((error) => setError(error.message));
    }
  };

  const handleVeryfieEmail = () => {
    veryfieEmailAddress()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <form
          onSubmit={handledSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photoUrl"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>

            {/* Check box */}

            <div className="text-red-700">{error}</div>
            <div className="form-control">
              <label className="flex items-center cursor-pointer gap-1">
                <input
                  onClick={acceptCondition}
                  type="checkbox"
                  className="checkbox checkbox-primary"
                />
                <span className="">
                  Accept <Link to="">terms & conditions</Link>
                </span>
              </label>
            </div>

            {/* checkbox */}

            <div className="form-control mt-6">
              <button className="btn btn-primary" disabled={!accept}>
                Register
              </button>
            </div>
            <label className="text-left gap-1">
              <span> Already have an account?</span>
              <Link to="/" className="label-text-alt link link-hover">
                LogIn
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
