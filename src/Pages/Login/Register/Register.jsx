import Lottie from "lottie-react";
import React from "react";
import register from "../../../assets/register.json";
import { Link } from "react-router";
import SocialLoginGoogle from "../SocialLogin/SocialLoginGoogle";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={register}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder=" Enter Your Name"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder=" Enter Your Email"
                />
                <label className="label">Photo URL</label>
                <input
                  name="Photo"
                  type="url"
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                <button className="btn btn-neutral mt-4">Register</button>
                <p>
                  Don't Have An Account ? Please{" "}
                  <Link
                    className="text-blue-600  underline font-bold"
                    to="/login"
                  >
                    LogIn
                  </Link>
                  .
                </p>
                <div className="text-center mb-5">
                  <SocialLoginGoogle></SocialLoginGoogle>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
